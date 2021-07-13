import Story from '../../domain/Story';
import Injections from '../injections';
import IUseCase from '../interfaces/IUseCase';

export default class GetStoryDetail implements IUseCase {
  private storiesRepository = Injections.storiesRepository;

  async execute(request: { uniqueName: string }): Promise<Story> {
    return this.storiesRepository.getOne(request);
  }
  
}