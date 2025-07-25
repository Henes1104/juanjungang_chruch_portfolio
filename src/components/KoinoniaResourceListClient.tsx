"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Resource {
  id: string;
  title: string;
  author: string;
  date: string;
  attachments?: string[];
  content?: string;
}

interface KoinoniaResourceListClientProps {
  resources: Resource[];
}

const KoinoniaResourceListClient = ({ resources }: KoinoniaResourceListClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = resources.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(resources.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <ul className="divide-y divide-gray-200">
        {currentItems.map((item) => (
          <li key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <Link href={`/koinonia/resources/${item.id}`}>
                <span className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  {item.title}
                </span>
              </Link>
              <div className="text-sm text-gray-500 mt-1">
                <span>{item.author}</span> | <span>{item.date}</span>
              </div>
            </div>
            <Link href={`/koinonia/resources/${item.id}`}>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                보기
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 mx-1 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            이전
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => paginate(page)} className={`px-4 py-2 mx-1 border rounded-lg shadow-sm ${currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-100'}`}>
              {page}
            </button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 mx-1 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
            다음
          </button>
        </div>
      )}
    </div>
  );
};

export default KoinoniaResourceListClient;
