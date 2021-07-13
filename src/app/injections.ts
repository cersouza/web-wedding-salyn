import Story from '../domain/Story';
import IRepository from './interfaces/IRepository';
import StoriesMongoRepository from './repositories/StoriesMongoRepository';

export default class Injections {
  static storiesRepository: IRepository<Story> = new StoriesMongoRepository();
}
