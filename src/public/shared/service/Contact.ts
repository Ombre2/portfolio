import { db } from 'config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { IContact } from '../types/Contact';

const contactsCollection = collection(db, 'contacts');

export const addContact = async (contact: IContact): Promise<void> => {
  await addDoc(contactsCollection, contact);
};
