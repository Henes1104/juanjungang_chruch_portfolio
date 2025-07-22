'use client';

import Link from 'next/link';
import { bulletinsData } from './data';
import { motion } from 'framer-motion';

export default function BulletinListPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-28">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          온라인 주보
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {bulletinsData.map((bulletin) => (
            <motion.div
              key={bulletin.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`/koinonia/bulletin/${bulletin.id}`} className="block bg-white rounded-xl shadow-md p-8 h-full transition-shadow duration-300 border border-gray-200/50 overflow-hidden">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{bulletin.title}</h2>
                  <p className="text-lg text-gray-600">등록자: {bulletin.author}</p>
                  <p className="text-lg text-gray-600">등록일: {bulletin.date}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
