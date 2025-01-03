import { db } from 'config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ISkill } from '../types/Skill';

// Référence de la collection "skills"
const COLLECTION_NAME = 'skills';
const skillsCollectionRef = collection(db, COLLECTION_NAME);

// Récupérer toutes les compétences
export const getSkills = async (): Promise<ISkill[]> => {
  try {
    const skillsSnapshot = await getDocs(skillsCollectionRef);
    return skillsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as ISkill));
  } catch (error) {
    return [];
  }
};
