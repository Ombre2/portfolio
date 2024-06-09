
import { faAngular, faGit, faLaravel, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import { useAppSelector } from "public/main/redux-store/app.hooks";
import LanguageSelector from "public/shared/components/langueSelector";
import { selectAllSkillState } from "public/shared/reduxStore/skills/selectors";
import { ISkill } from "public/shared/types/Skill";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Skills = () => {
  /**
 * TRADUCTION
 */
  const { t } = useTranslation();

  /**
   * REDUX
   */
  const { listSkill, loading } = useAppSelector(selectAllSkillState)

  /**
   * VARIABLE
   */
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.3, // Délai entre chaque enfant
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  /**
   * FUNCTION
   */
  const getColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    if (percentage >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getIcon = (icon_name: string): ReactNode => {
    switch (icon_name) {
      case 'angular':
        return <FontAwesomeIcon icon={faAngular} size="xl" />
      case 'react':
        return <FontAwesomeIcon icon={faReact} size="xl" />
      case 'git':
        return <FontAwesomeIcon icon={faGit} size="xl" />
      case 'node':
        return <FontAwesomeIcon icon={faNode} size="xl" />
      case 'reactNative':
        return <FontAwesomeIcon icon={faReact} size="xl" />
      case 'laravel':
        return <FontAwesomeIcon icon={faLaravel} size="xl" />
      default:
        return <></>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" text-center">
        <LanguageSelector /> {/* Ajout du sélecteur de langue */}
      </div>
      <h1 className="text-3xl font-semibold mb-8 text-center">{t('SKILLS.TITLE')}</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {loading ? (
          Array(8)
            .fill(0)
            .map((_, index) => (
              <motion.div key={index} className="bg-white shadow-md rounded-lg p-4" variants={itemVariants}>
                <div className="flex justify-center mb-4">
                  <Skeleton circle height={64} width={64} className="mx-auto" />
                </div>
                <Skeleton height={30} width="80%" className="mx-auto mb-4" />
                <Skeleton height={20} width="100%" />
                <Skeleton height={20} width="100%" className="mt-2" />
              </motion.div>
            ))
        ) : (
          listSkill.map((skill: ISkill, index: number) => (
            <motion.div key={index} className="bg-white shadow-md rounded-lg p-4" variants={itemVariants}>
              <div className="flex justify-center mb-4 text-6xl text-blue-500">
                {getIcon(skill.icon_name)}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">{skill.name}</h2>
              <div className="w-full bg-gray-200 rounded-full h-5 relative">
                <div
                  className={`${getColor(skill.percentage)} h-5 rounded-full`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs text-black font-bold">
                  {skill.percentage}%
                </span>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Skills;
