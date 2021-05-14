export default interface IRepository<T> {

  list(): Promise<Array<T>>;

  getOne(query: any): Promise<T>;

} 