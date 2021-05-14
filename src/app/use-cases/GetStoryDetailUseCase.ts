import Story from '../../domain/Story';
import IUseCase from '../interfaces/IUseCase';
import StoriesLocalRepository from '../repositories/StoriesLocalRepository';

export default class GetStoryDetail implements IUseCase {
  private storiesRepository = new StoriesLocalRepository();

  async execute(request: { uniqueName: string }): Promise<Story> {
    const story = await this.storiesRepository.getOne(request);
    return story;
  }
  
}