import Story from '../../domain/Story';
import Injections from '../injections';
import IUseCase from '../interfaces/IUseCase';

export default class UpdateStoryDataUseCase implements IUseCase {
  private storiesRepository = Injections.storiesRepository;

  async execute({ uniqueName, updates}: { uniqueName: string, updates: Partial<Story> }): Promise<void> {
    await this.storiesRepository.updateOne({uniqueName}, updates);
  }
  
}