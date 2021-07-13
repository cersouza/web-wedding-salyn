import Injections from '../injections';
import IUseCase from '../interfaces/IUseCase';

export default class GetTopStories implements IUseCase {
  private storiesRepository = Injections.storiesRepository;

  async execute(): Promise<Array<string>> {
    const stories = await this.storiesRepository.list();
    const uniqueNames = stories.map(({ uniqueName }) => uniqueName);
    return uniqueNames;
  }
  
}