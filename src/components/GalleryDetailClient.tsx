"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ImageModal from '@/components/ImageModal';
import Link from 'next/link';

interface GalleryItem {
  id: string;
  title: string;
  author: string;
  date: string;
  imagePath: string;
  fullImagePaths: string[];
}

interface GalleryDetailClientProps {
  galleryItem: GalleryItem;
}

const GalleryDetailClient = ({ galleryItem }: GalleryDetailClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const handleDownloadAll = () => {
    if (!galleryItem) {
      console.warn("Gallery item not found, cannot download images.");
      return;
    }
    galleryItem.fullImagePaths.forEach((imagePath, index) => {
      const link = document.createElement('a');
      link.href = imagePath;
      link.download = `${galleryItem.title}_${index + 1}.jpeg`;
      document.body.appendChild(link);
      document.body.removeChild(link);
    });
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">{galleryItem.title}</h1>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-gray-600 mb-8">
        <div>
          <span>작성자: {galleryItem.author}</span> | <span>등록일: {galleryItem.date}</span>
        </div>
        <button
          onClick={handleDownloadAll}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 md:ml-auto mt-4 md:mt-0"
        >
          모두 다운로드
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {galleryItem.fullImagePaths.map((imagePath, index) => (
          <motion.div
            key={index}
            className="relative w-full h-60 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            variants={imageVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
            onClick={() => openModal(imagePath)}
          >
            <Image
              src={imagePath}
              alt={`${galleryItem.title} 이미지 ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && (
        <ImageModal src={selectedImage} alt={galleryItem.title} onClose={closeModal} />
      )}

      <div className="mt-8 text-right">
        <Link href="/koinonia/gallery" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
          목록으로
        </Link>
      </div>
    </div>
  );
};

export default GalleryDetailClient;
