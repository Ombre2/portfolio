import { motion } from 'framer-motion';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonDetailProject: React.FC = () => {
  return (
    <motion.div className="container mx-auto p-4">
      {/* Bouton retour */}
      <motion.div className="mb-4">
        <Skeleton className="pe-2 py-3 transition flex items-center gap-4" />
      </motion.div>

      {/* Détails du projet */}
      <motion.div className="mb-8">
        <Skeleton className="text-3xl font-bold mb-6" />
        <Skeleton className="text-gray-700 mb-6" />
        <motion.div className="flex flex-wrap gap-3 mb-6">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="bg-gray-200 text-sm font-semibold px-3 py-1 rounded w-[60px]" />
            ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-4">
          <Skeleton className="text-blue-500 hover:underline text-lg" />
        </motion.div>
      </motion.div>

      {/* Liste des images */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden shadow-md bg-gray-100 flex justify-center items-center p-2"
            >
              <Skeleton className="max-w-full max-h-48 object-cover" />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default SkeletonDetailProject;
