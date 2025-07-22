'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function KindergartenLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const departmentId = 'kindergarten'; // This layout is specifically for kindergarten

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 pt-20">
      <main className="flex flex-1 container mx-auto px-4 py-12">
        <aside className="w-1/5 pr-12 border-r border-gray-200 hidden md:block">
          <nav className="sticky top-24">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800">유치부</h2>
            <ul>
              <li className="mb-4">
                <Link href={`/institution/${departmentId}/introduction`} className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                  pathname.includes('/introduction') ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                } transition duration-300 block`}>
                  소개
                </Link>
              </li>
              <li className="mb-4">
                <Link href={`/institution/${departmentId}/bulletin`} className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                  pathname.includes('/bulletin') ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                } transition duration-300 block`}>
                  게시판
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="flex-1 pl-12">
          {children}
        </section>
      </main>
    </div>
  );
}
