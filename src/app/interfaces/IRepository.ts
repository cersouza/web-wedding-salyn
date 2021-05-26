export default interface IRepository<T> {

  list(): Promise<Array<T>>;

  getOne(query: Partial<T>): Promise<T>;

  updateOne(query: Partial<T>, update: Partial<T>): Promise<void>;

} 