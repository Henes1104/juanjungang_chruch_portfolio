
'use client';

import Link from 'next/link';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">주안중앙교회</h3>
            <p className="text-gray-400">인천광역시 부평구 가재울로 167 (십정동)</p>
            <p className="text-gray-400">전화: 032-584-3355</p>
            <p className="text-gray-400">이메일: juanjch@naver.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">정책</h3>
            <ul className="space-y-2">
              <li><MotionLink href="/privacy" className="hover:text-gray-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>개인정보처리방침</MotionLink></li>
              <li><MotionLink href="/terms" className="hover:text-gray-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>이용약관</MotionLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Juanjungang Church. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.youtube.com/@%EC%A3%BC%EC%95%88%EC%A4%91%EC%95%99%EA%B5%90%ED%9A%8C%EB%B6%80%ED%8F%89%EC%84%B1%EC%A0%84" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaYoutube size={32} />
            </a>
            <a href="https://www.instagram.com/explore/locations/649123920/juanjung-ang-gyohoe/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
