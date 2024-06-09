import { motion } from 'framer-motion';
import { useAppSelector } from "public/main/redux-store/app.hooks";
import LanguageSelector from "public/shared/components/langueSelector";
import { selectAllProjectState } from "public/shared/reduxStore/projects/selectors";
import { IProject } from "public/shared/types/Project";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ProjectCard from "./components/ProjectCard";

const Project: React.FC = () => {
  /**
   * TRADUCTION
   */
  const { t } = useTranslation();

  /**
   * REDUX
   */
  const { listProject, loading } = useAppSelector(selectAllProjectState)

  /**
   * VARIABLE
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className=" text-center">
        <LanguageSelector /> {/* Ajout du sélecteur de langue */}
      </div>
      <h1 className="text-4xl font-semibold mb-6 text-center">{t('PROJECTS.TITLE')}</h1>
      <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
        {t('PROJECTS.DESCRIPTION')}
      </p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {loading ?
          Array.from({ length: 4 }).map((_, index) => (
            <motion.div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white" variants={itemVariants}>
              <Skeleton height={200} className="w-full h-48 object-cover" />
              <div className="px-6 py-4">
                <Skeleton height={30} width="80%" className="mb-2" />
                <Skeleton count={3} />
              </div>
              <div className="px-6 pt-4 pb-2">
                <Skeleton width={80} height={20} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" />
                <Skeleton width={80} height={20} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" />
                <Skeleton width={80} height={20} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" />
              </div>
              <div className="px-6 pb-4">
                <Skeleton width={100} height={20} className="text-blue-500 hover:underline" />
              </div>
            </motion.div>
          ))
          : listProject.map((project: IProject, index: number) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                project={project}
              />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Project;
