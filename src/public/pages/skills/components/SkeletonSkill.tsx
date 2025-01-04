import { motion } from 'framer-motion';
import { itemVariants } from 'public/shared/utils';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonSkill: React.FC = () => (
  <motion.div className="bg-white shadow-md rounded-lg p-4" variants={itemVariants}>
    <div className="flex justify-center mb-4">
      <Skeleton circle height={64} width={64} className="mx-auto" />
    </div>
    <Skeleton height={30} width="80%" className="mx-auto mb-2" />
    <Skeleton height={20} width="100%" />
    <Skeleton height={20} width="100%" className="mt-2" />
  </motion.div>
);

export default SkeletonSkill;
