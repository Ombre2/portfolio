import { motion } from 'framer-motion';
import { itemVariants } from 'public/shared/utils';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonProjectItem: React.FC = () => {
  return (
    <motion.div
      className="mb-6 overflow-hidden cursor-pointer group"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: '100%',
        position: 'relative'
      }}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Skeleton className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SkeletonProjectItem;
