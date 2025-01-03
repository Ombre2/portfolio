import { db } from 'config/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  updateDoc,
  WithFieldValue
} from 'firebase/firestore';
import { IProject } from '../types/Project';

// Référence de la collection "projects"
const COLLECTION_NAME = 'projects';
const projectsCollection = collection(db, COLLECTION_NAME);

// Récupérer tous les projets
export const getProjects = async (): Promise<IProject[]> => {
  try {
    const querySnapshot = await getDocs(projectsCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IProject));
  } catch (error) {
    return [];
  }
};

// Récupérer un projet par ID
export const getProjectById = async (id: string): Promise<IProject | null> => {
  if (!id) {
    console.error('ID invalide ou manquant.');
    return null;
  }

  try {
    const projectDoc = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(projectDoc);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as IProject;
    } else {
      console.warn(`Aucun projet trouvé avec l'ID : ${id}`);
      return null;
    }
  } catch (error) {
    return null;
  }
};

// Ajouter un projet
export const addProject = async (project: WithFieldValue<DocumentData>): Promise<void> => {
  try {
    await addDoc(projectsCollection, project);
  } catch (error) {
    throw error;
  }
};

// Mettre à jour un projet
export const updateProject = async (id: string, project: Partial<IProject>): Promise<void> => {
  if (!id) {
    console.error('ID invalide ou manquant pour la mise à jour.');
    return;
  }

  try {
    const projectDoc = doc(db, COLLECTION_NAME, id);
    await updateDoc(projectDoc, project);
  } catch (error) {
    throw error;
  }
};

// Supprimer un projet
export const deleteProject = async (id: string): Promise<void> => {
  if (!id) {
    console.error('ID invalide ou manquant pour la suppression.');
    return;
  }

  try {
    const projectDoc = doc(db, COLLECTION_NAME, id);
    await deleteDoc(projectDoc);
  } catch (error) {
    throw error;
  }
};
