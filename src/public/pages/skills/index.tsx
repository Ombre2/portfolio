
import { faAngular, faGit, faLaravel, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "public/main/redux-store/app.hooks";
import { selectAllSkillState } from "public/shared/reduxStore/skills/selectors";
import { ISkill } from "public/shared/types/Skill";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  /**
 * TRADUCTION
 */
  const { t } = useTranslation();


  /**
   * REDUX
   */
  const { listSkill } = useAppSelector(selectAllSkillState)

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
      <h1 className="text-3xl font-semibold mb-8 text-center">{t('SKILLS.TITLE')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {listSkill.map((skill: ISkill, index: number) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-center mb-4 text-6xl text-blue-500">
              {getIcon(skill.icon_name)}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-center">{skill.name}</h2>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className={`${getColor(skill.percentage)} h-6 rounded-full`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <p className="text-center mt-2">{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
