import { resourcesData } from './data';
import KoinoniaResourceListClient from '@/components/KoinoniaResourceListClient';
import { motion } from 'framer-motion';

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        중앙자료실
      </motion.h1>
      <KoinoniaResourceListClient resources={resourcesData} />
    </div>
  );
};

export default ResourcesPage;