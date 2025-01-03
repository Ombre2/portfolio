import { db } from 'config/firebase';
import { addDoc, collection, DocumentData, WithFieldValue } from 'firebase/firestore';

// Référence de la collection "contacts"
const COLLECTION_NAME = 'contacts';
const contactsCollection = collection(db, COLLECTION_NAME);

// Ajouter un contact
export const addContact = async (contact: WithFieldValue<DocumentData>): Promise<void> => {
  try {
    await addDoc(contactsCollection, contact);
  } catch (error) {
    throw error;
  }
};
