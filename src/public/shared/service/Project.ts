import { db } from 'config/firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { IProject } from '../types/Project';

const projectsCollection = collection(db, 'projects');

export const getProjects = async (): Promise<IProject[]> => {
  const querySnapshot = await getDocs(projectsCollection);
  const projects: IProject[] = [];
  querySnapshot.forEach((doc) => {
    projects.push({ id: doc.id, ...doc.data() } as IProject);
  });
  return projects;
};

export const getProjectById = async (id: string): Promise<IProject | null> => {
  const projectDoc = doc(db, 'Projects', id);
  const docSnap = await getDoc(projectDoc);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IProject;
  } else {
    return null;
  }
};

export const addProject = async (project: IProject): Promise<void> => {
  await addDoc(projectsCollection, project);
};

export const updateProject = async (id: string, project: Partial<IProject>): Promise<void> => {
  const projectDoc = doc(db, 'Projects', id);
  await updateDoc(projectDoc, project);
};

export const deleteProject = async (id: string): Promise<void> => {
  const projectDoc = doc(db, 'Projects', id);
  await deleteDoc(projectDoc);
};
