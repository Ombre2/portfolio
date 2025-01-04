import { motion } from 'framer-motion';
import { itemVariants } from 'public/shared/utils';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonProjectCard: React.FC = () => {
  return (
    <motion.div className="space-y-4" variants={itemVariants} initial="hidden" animate="visible" whileHover="hover">
      <motion.div
        className="flex flex-col bg-gray-100 p-4 rounded shadow"
        whileHover={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)' }} // Animation de shadow au hover
      >
        <Skeleton className="w-full h-48 object-cover rounded cursor-pointer" />

        {/* Contenu */}
        <div className="mt-4">
          <Skeleton className="text-xl font-bold"></Skeleton>
          <Skeleton className="text-gray-700 mt-2"></Skeleton>

          <div className="flex flex-wrap gap-2 mt-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className="bg-gray-200 text-sm font-semibold px-3 py-1 rounded w-[60px]"
                ></Skeleton>
              ))}
          </div>

          <div className="mt-4">
            <Skeleton className="text-blue-500 hover:underline" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkeletonProjectCard;
