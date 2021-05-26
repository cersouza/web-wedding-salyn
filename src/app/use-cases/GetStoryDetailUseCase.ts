import Story from '../../domain/Story';
import IUseCase from '../interfaces/IUseCase';
import StoriesLocalRepository from '../repositories/StoriesLocalRepository';
import StoriesMongoRepository from '../repositories/StoriesMongoRepository';

export default class GetStoryDetail implements IUseCase {
  // private storiesRepository = new StoriesLocalRepository();
  private storiesRepository = new StoriesMongoRepository();

  async execute(request: { uniqueName: string }): Promise<Story> {
    const story = await this.storiesRepository.getOne(request);
    return story;
  }
  
}