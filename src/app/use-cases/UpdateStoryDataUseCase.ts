import Story from '../../domain/Story';
import IUseCase from '../interfaces/IUseCase';
import StoriesLocalRepository from '../repositories/StoriesLocalRepository';
import StoriesMongoRepository from '../repositories/StoriesMongoRepository';

export default class UpdateStoryDataUseCase implements IUseCase {
  // private storiesRepository = new StoriesLocalRepository();
  private storiesRepository = new StoriesMongoRepository();

  async execute({ uniqueName, updates}: { uniqueName: string, updates: Partial<Story> }): Promise<void> {
    await this.storiesRepository.updateOne({uniqueName}, updates);
  }
  
}