import Button from "./Button";
import Event from "./Event";
import Gift from "./Gift";
import Page from "./Page";

export default interface Story {
  id: string,
  uniqueName: string,
  telephoneNumber: string,
  urlBackgroundImage: string,
  urlConfirmacaoPresenca?: string,
  spousesName: Array<string>,
  event: Event,
  buttons: Array<Button>,
  pages: Array<Page>
  giftsList: Array<Gift>,
}
