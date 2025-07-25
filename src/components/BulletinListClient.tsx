"use client";

import Link from 'next/link';

interface Bulletin {
  id: string;
  title: string;
  author: string;
  date: string;
  files: string[];
}

interface BulletinListClientProps {
  bulletins: Bulletin[];
}

export default function BulletinListClient({ bulletins }: BulletinListClientProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {bulletins.map((bulletin) => (
        <div
          key={bulletin.id}
          className="bg-white rounded-xl shadow-md p-8 h-full transition-all duration-300 border border-gray-200/50 overflow-hidden"
        >
          <Link href={`/koinonia/bulletin/${bulletin.id}`} className="block">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{bulletin.title}</h2>
              <p className="text-lg text-gray-600">등록자: {bulletin.author}</p>
              <p className="text-lg text-gray-600">등록일: {bulletin.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
