import IUseCase from '../interfaces/IUseCase';
import StoriesLocalRepository from '../repositories/StoriesLocalRepository';
import StoriesMongoRepository from '../repositories/StoriesMongoRepository';

export default class GetTopStories implements IUseCase {
  // private storiesRepository = new StoriesLocalRepository();
  private storiesRepository = new StoriesMongoRepository();

  async execute(): Promise<Array<string>> {
    const stories = await this.storiesRepository.list();
    const uniqueNames = stories.map(({ uniqueName }) => uniqueName);
    return uniqueNames;
  }
  
}