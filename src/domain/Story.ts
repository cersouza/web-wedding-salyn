import Button from "./Button";
import Event from "./Event";
import Page from "./Page";

export default interface Story {
  _id: string,
  uniqueName: string,
  urlBackgroundImage: string,
  urlConfirmacaoPresenca?: string,
  spousesName: Array<string>,
  event: Event,
  buttons: Array<Button>,
  pages: Array<Page>
}
