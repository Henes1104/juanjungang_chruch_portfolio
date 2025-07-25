'use client';

export const runtime = 'nodejs';

import React from 'react';
import Image from 'next/image';
import { galleryData, GalleryItem } from './data';
import Link from 'next/link';

const GalleryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">갤러리</h1>
      <p className="text-lg text-gray-700 mb-8">
        주안중앙교회의 다양한 활동 사진들을 둘러보세요.
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {galleryData.map((item: GalleryItem) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/koinonia/gallery/${item.id}`} className="block">
              <div className="relative w-full h-60">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>작성자: {item.author}</span>
                  <span>등록일: {item.date}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
