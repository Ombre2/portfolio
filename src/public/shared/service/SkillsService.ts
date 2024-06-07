import { db } from 'config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ISkill } from '../types/Skill';

const skillsCollectionRef = collection(db, 'skills');

export const getSkills = async () => {
  const skillsSnapshot = await getDocs(skillsCollectionRef);
  const skills: ISkill[] = [];
  skillsSnapshot.forEach((doc) => {
    skills.push({ id: doc.id, ...doc.data() } as ISkill);
  });
  return skills;
};
