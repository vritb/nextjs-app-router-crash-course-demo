"use server";
import { ID, Query } from 'appwrite';
import { appwriteDatabase } from './utils/appwrite';

export interface Event {
  $id?: string;
  name: string;
  Description: string;
  date: Date;
}

export const getEvents = async(): Promise<Event[]> => {
  try {
    console.log("ENTER getEvents");
    const { documents } = await appwriteDatabase.listDocuments(
    process.env.APPWRITE_EVENTDEMO_DATABASE_ID || '',
    process.env.APPWRITE_EVENTS_COLLECTION_ID || '',
    [
      Query.limit(100)
    ],
  );
  console.log(documents);
  const events: Event[] = documents as unknown as Event[];
  console.log("++++++++++ LEAVE getEvents ++++++++++");
  return events;
} catch(error) {
  console.log(error);
  return [];
}
};

export const createEvent = async (event: Event): Promise<Event> => {
  const createdEvent = (await appwriteDatabase.createDocument(
    process.env.APPWRITE_EVENTDEMO_DATABASE_ID || '',
    process.env.APPWRITE_EVENTS_COLLECTION_ID || '',
    ID.unique(),
    event
  )) as unknown as Event;
  return createdEvent;
};

export const getEventById = async (id: string): Promise<Event> => {
  const event = (await appwriteDatabase.getDocument(
    process.env.APPWRITE_EVENTDEMO_DATABASE_ID || '',
    process.env.APPWRITE_EVENTS_COLLECTION_ID || '',
    id
  )) as unknown as Event;
  if (!event) {
    throw new Error('Event not found');
  }
  return event;
};
