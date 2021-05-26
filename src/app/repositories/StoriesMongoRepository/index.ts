import Story from "../../../domain/Story";
import IRepository from "../../interfaces/IRepository";
import { ConnectToStoriesCollection } from './connectToStoriesCollection';

export default class StoriesMongoRepository implements IRepository<Story> {

  async getOne(query: { uniqueName: string }) {
    const collection = await ConnectToStoriesCollection();
    
    const event = await collection.findOne({ uniqueName: query.uniqueName });

    if(event._id)
      delete event._id;

    return event as Story;
  }

  async list() {
    const collection = await ConnectToStoriesCollection();

    const events = await collection.find({}, { projection: { uniqueName: 1 } }).limit(10).toArray();

    console.log(events);  

    return events as Array<Story>;
  }

  async updateOne(query: { uniqueName: string }, updates) {
    const collection = await ConnectToStoriesCollection();

    await collection.updateOne(query, { $set: updates });
  }

}