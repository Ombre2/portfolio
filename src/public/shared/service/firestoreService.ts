import { db } from 'config/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  FirestoreError,
  getDoc,
  updateDoc,
  WithFieldValue
} from 'firebase/firestore';

// Utilitaire pour gérer les erreurs Firestore
export const handleFirestoreError = (error: FirestoreError): void => {
  console.error(`Erreur Firestore [${error.code}]:`, error.message);
};

// Fonction utilitaire pour récupérer un document
export const getDocumentById = async (collectionName: string, id: string) => {
  try {
    const documentRef = doc(db, collectionName, id);
    const documentSnap = await getDoc(documentRef);

    if (documentSnap.exists()) {
      return { id: documentSnap.id, ...documentSnap.data() };
    } else {
      console.warn(`Aucun document trouvé avec l'ID : ${id}`);
      return null;
    }
  } catch (error) {
    handleFirestoreError(error as FirestoreError);
    throw error;
  }
};

// Fonction utilitaire pour ajouter un document
export const addDocument = async <T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  data: T
): Promise<void> => {
  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, data);
  } catch (error) {
    handleFirestoreError(error as FirestoreError);
    throw error;
  }
};

// Fonction utilitaire pour mettre à jour un document
export const updateDocument = async <T>(collectionName: string, id: string, data: Partial<T>): Promise<void> => {
  try {
    const documentRef = doc(db, collectionName, id);
    await updateDoc(documentRef, data);
  } catch (error) {
    handleFirestoreError(error as FirestoreError);
    throw error;
  }
};

// Fonction utilitaire pour supprimer un document
export const deleteDocument = async (collectionName: string, id: string): Promise<void> => {
  try {
    const documentRef = doc(db, collectionName, id);
    await deleteDoc(documentRef);
  } catch (error) {
    handleFirestoreError(error as FirestoreError);
    throw error;
  }
};
