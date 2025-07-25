'use client';
export const runtime = 'edge';

import React from 'react';
import { useParams } from 'next/navigation';
import { noticesData } from '../data';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NoticeDetailPage = () => {
  const params = useParams();
  const { id } = params;

  const notice = noticesData.find((n) => n.id === id);

  if (!notice) {
    return (
      <div className="container mx-auto px-4 py-8 pt-28 text-center">
        <h1 className="text-4xl font-bold">공지사항을 찾을 수 없습니다.</h1>
        <Link href="/koinonia/notice" legacyBehavior>
          <a className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
            목록으로 돌아가기
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8"
      >
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{notice.title}</h1>
        <div className="text-md text-gray-500 mb-6 border-b pb-4">
          <span>작성자: {notice.author}</span> | <span>작성일: {notice.date}</span>
        </div>
        <div className="prose max-w-none mb-8">
          <p className="whitespace-pre-line">{notice.content}</p>
        </div>
        <div className="mt-8 text-right">
          <Link href="/koinonia/notice" legacyBehavior>
            <a className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
              목록으로
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NoticeDetailPage;