import Story from "../../../domain/Story";
import IRepository from "../../interfaces/IRepository";
import Events from '../../../config/data.json';

export default class StoriesLocalRepository implements IRepository<Story> {


  async getOne(query: { uniqueName: string }) {
    const event = Events.find((event) => event.uniqueName === query.uniqueName);

    return event as unknown as Story;
  }

  async list() {
    return Events as unknown as Array<Story>;
  }

  async updateOne(query, update) {
    Promise.resolve();
  }

}