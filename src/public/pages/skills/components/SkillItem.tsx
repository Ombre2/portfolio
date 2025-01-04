import {
  faAngular,
  faCss3,
  faGit,
  faHtml5,
  faJava,
  faLaravel,
  faNode,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import NestJs from 'public/shared/assets/image/project/nestJs.svg';
import { ISkill } from 'public/shared/types/Skill';
import { itemVariants } from 'public/shared/utils';
import React from 'react';

interface SkillItemProps {
  skill: ISkill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const getIcon = (icon_name: string) => {
    switch (icon_name) {
      case 'angular':
        return <FontAwesomeIcon icon={faAngular} size="xl" />;
      case 'react':
        return <FontAwesomeIcon icon={faReact} size="xl" />;
      case 'git':
        return <FontAwesomeIcon icon={faGit} size="xl" />;
      case 'node':
        return <FontAwesomeIcon icon={faNode} size="xl" />;
      case 'reactNative':
        return <FontAwesomeIcon icon={faReact} size="xl" />;
      case 'laravel':
        return <FontAwesomeIcon icon={faLaravel} size="xl" />;
      case 'nestJs':
        return <img src={NestJs} alt="NestJs Logo" className="w-[100px] h-[100px]" />;
      case 'html':
        return <FontAwesomeIcon icon={faHtml5} size="xl" />;
      case 'css':
        return <FontAwesomeIcon icon={faCss3} size="xl" />;
      case 'java':
        return <FontAwesomeIcon icon={faJava} size="xl" />;
      default:
        return <></>;
    }
  };

  const getColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    if (percentage >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
      variants={itemVariants}
    >
      {/* Icône */}
      <div className="flex justify-center mb-6 text-6xl text-blue-500">{getIcon(skill.icon_name)}</div>

      {/* Nom de la compétence */}
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">{skill.name}</h2>

      {/* Barre de progression */}
      <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`${getColor(skill.percentage)} h-4 transition-all duration-500`}
          style={{ width: `${skill.percentage}%` }}
        ></div>
        {/* Étiquette de pourcentage */}
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
          {skill.percentage}%
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;