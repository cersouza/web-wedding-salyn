import { ConnectToDataBase } from "./connectToDatabase";
import { Collection } from 'mongodb';

export async function ConnectToStoriesCollection(): Promise<Collection> {
  const db = await ConnectToDataBase(process.env.MONGODB_URI_STORIES, process.env.MONGO_DBNAME);

  const collection = await db.collection(process.env.MONGO_COLLECTION_STORIES);
  
  return collection;
}