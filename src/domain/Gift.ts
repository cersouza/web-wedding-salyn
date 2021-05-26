export default interface Gift {
  _id: string,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  given?: boolean,
}