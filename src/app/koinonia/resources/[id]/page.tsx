export const runtime = 'edge';
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { resourcesData } from '../data';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ResourceDetailPage = () => {
  const params = useParams();
  const { id } = params;

  const resource = resourcesData.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-8 pt-28 text-center">
        <h1 className="text-4xl font-bold">자료를 찾을 수 없습니다.</h1>
        <Link href="/koinonia/resources" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
          목록으로 돌아가기
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
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{resource.title}</h1>
        <div className="text-md text-gray-500 mb-6 border-b pb-4">
          <span>작성자: {resource.author}</span> | <span>작성일: {resource.date}</span>
        </div>
        {resource.content && (
          <div className="prose max-w-none mb-8">
            <p>{resource.content}</p>
          </div>
        )}
        {resource.attachments && resource.attachments.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">첨부파일</h2>
            <ul>
              {resource.attachments.map((file, index) => (
                <li key={index} className="mb-2">
                  <a href={file} download className="text-blue-600 hover:underline">
                    {file.split('/').pop()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-8 text-right">
          <Link href="/koinonia/resources" className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
          목록으로
        </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourceDetailPage;