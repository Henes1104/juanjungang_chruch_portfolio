'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

const MotionLink = motion(Link);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [activeLinkRect, setActiveLinkRect] = useState<{ x: number; y: number; width: number; height: number; } | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const updateActiveLinkRect = () => {
    setActiveLinkRect(null); // Explicitly reset at the start
    console.log('updateActiveLinkRect called. Current pathname:', pathname);

    if (headerRef.current) {
      let foundActiveElement: HTMLLIElement | null = null;

      // Prioritize exact match for '/'
      if (pathname === '/') {
        foundActiveElement = linkRefs.current['/'];
      }

      // If not '/', or if '/' is not found/active, then find the best startsWith match
      if (!foundActiveElement) {
        // Sort paths by length in descending order to find the most specific match first
        const sortedLinkPaths = Object.keys(linkRefs.current).sort((a, b) => b.length - a.length);

        for (const linkPath of sortedLinkPaths) {
          const ref = linkRefs.current[linkPath];
          if (ref && pathname.startsWith(linkPath)) {
            foundActiveElement = ref;
            break; // Found the most specific match
          }
        }
      }
      console.log('Found active element:', foundActiveElement ? foundActiveElement.dataset.path : 'None');

      if (foundActiveElement) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const linkRect = foundActiveElement.getBoundingClientRect();
        const underlineHeight = 2; // The height of the underline
        const underlineTop = headerRect.height - underlineHeight; // Position at the very bottom of the header

        const newRect = {
          x: linkRect.x - headerRect.x,
          y: underlineTop, // This will be used as 'top' in motion.div
          width: linkRect.width,
          height: underlineHeight,
        };

        setActiveLinkRect(newRect);
      } else {
        // If no active link is found, hide the underline
        setActiveLinkRect(null);
      }
    }
  };

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      updateActiveLinkRect();
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    updateActiveLinkRect();
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== '/') {
      router.push('/');
    }
    scrollToSection("home");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header height
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 z-20 p-2 md:p-4 transition-shadow duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}
    >
      <>
      <nav className="container mx-auto flex justify-between items-center relative px-4 md:px-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" onClick={handleLogoClick}>
            <Image
              src="/images/church_logo_garo.png"
              alt="주안중앙교회 로고"
              width={180} // Adjust as needed for horizontal logo
              height={60} // Adjust as needed for horizontal logo
              priority
            />
          </Link>
        </motion.div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-8 lg:space-x-20">
          <li ref={el => linkRefs.current['/'] = el} data-path="/">
            <MotionLink
                href="/"
                onClick={handleLogoClick}

                className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                메인
              </MotionLink>
          </li>
          <li ref={el => linkRefs.current['/sermons'] = el} data-path="/sermons">
            <MotionLink
              href="/sermons"
              
              className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/sermons') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              말씀
            </MotionLink>
          </li>
          <li ref={el => linkRefs.current['/praise'] = el} data-path="/praise">
            <MotionLink
              href="/praise"
              
              className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/praise') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              찬양
            </MotionLink>
          </li>
          <li ref={el => linkRefs.current['/school'] = el} data-path="/school">
            <MotionLink
              href="/school"
              
              className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/school') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              학교
            </MotionLink>
          </li>
          <li ref={el => linkRefs.current['/department'] = el} data-path="/department">
            <MotionLink
              href="/department"
              
              className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/department') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              부서
            </MotionLink>
          </li>
          <li ref={el => linkRefs.current['/koinonia'] = el} data-path="/koinonia">
            <MotionLink
              href="/koinonia"
              
              className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/koinonia') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              코이노니아
            </MotionLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {activeLinkRect && (
        <motion.div
          key={pathname}
          className="absolute bg-blue-600"
          style={{ 
            left: activeLinkRect.x, 
            width: activeLinkRect.width, 
            top: activeLinkRect.y, 
            height: activeLinkRect.height,
            transformOrigin: 'left' // Add this for the drawing effect
          }}
          initial={{ scaleX: 0 }} // Start with 0 width
          animate={{ scaleX: 1 }} // Animate to full width
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
        />
      )}

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white bg-opacity-90 shadow-lg py-4 absolute w-full left-0"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <MotionLink
                  href="/"
                  scroll={false}
                  onClick={handleLogoClick}
  
                  className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  메인
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="/sermons"
  
                  className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/sermons') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  말씀
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="/praise"
  
                  className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/praise') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  찬양
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="/school"
  
                  className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/school') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  학교
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="/department"
  
                  className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/department') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  부서
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="/koinonia"
  
                  className={`relative px-8 py-2 transition duration-300 group inline-block ${isActive('/koinonia') ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                  onClick={toggleMobileMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  코이노니아
                </MotionLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </>
    </motion.header>
  );
}
