import { Db, MongoClient } from 'mongodb';

let cachedDb: Db;

export async function ConnectToDataBase(uri: string, dbName: string) {
  if(cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);
  
  cachedDb = db;

  return db;
}