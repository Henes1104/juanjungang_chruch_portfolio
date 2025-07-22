'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const KoinoniaPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const koinoniaItems = [
    {
      title: '중앙자료실',
      description: '장학생 모집공고, 공동의회 자료 등 중요한 자료들을 확인하세요.',
      link: '/koinonia/resources',
    },
    {
      title: '공지사항',
      description: '교회의 최신 소식과 공지사항을 확인하세요.',
      link: '/koinonia/notice',
    },
    {
      title: '온라인 주보',
      description: '매주 온라인 주보를 확인하고 예배에 참여하세요.',
      link: '/koinonia/bulletin',
    },
    {
      title: '자유게시판',
      description: '성도님들의 자유로운 소통을 위한 공간입니다.',
      link: '/koinonia/forum',
    },
    {
      title: '갤러리',
      description: '교회 활동 사진들을 둘러보세요.',
      link: '/koinonia/gallery',
    },
    {
      title: 'QT',
      description: '매일의 QT를 통해 하나님과 더 가까워지는 시간을 가지세요.',
      link: '/koinonia/qt',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-28">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          코이노니아
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {koinoniaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.link} className="block bg-white rounded-xl shadow-md p-8 h-full transition-shadow duration-300 border border-gray-200/50 overflow-hidden">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{item.title}</h2>
                  <p className="text-lg text-gray-600">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KoinoniaPage;
