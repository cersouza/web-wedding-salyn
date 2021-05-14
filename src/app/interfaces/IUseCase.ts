export default interface IUseCase {

  execute(request?: any): Promise<any>;

} 