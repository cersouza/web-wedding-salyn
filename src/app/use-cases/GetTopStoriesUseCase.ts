import IUseCase from '../interfaces/IUseCase';
import StoriesLocalRepository from '../repositories/StoriesLocalRepository';

export default class GetTopStories implements IUseCase {
  private storiesRepository = new StoriesLocalRepository();

  async execute(): Promise<Array<string>> {
    const stories = await this.storiesRepository.list();
    const uniqueNames = stories.map(({ uniqueName }) => uniqueName);
    return uniqueNames;
  }
  
}