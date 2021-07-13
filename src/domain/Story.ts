import Button from "./Button";
import Event from "./Event";
import Gift from "./Gift";
import Page from "./Page";

export default class Story {
  id: string;

  template: 'salyn' | 'emaio';

  uniqueName: string;

  telephoneNumber: string;

  urlBackgroundImage: string;

  urlConfirmacaoPresenca?: string;

  spousesName: Array<string>;

  event: Event;

  buttons: Array<Button>;

  pages: Array<Page>

  giftsList: Array<Gift>;

  urlAvatarImage?: string;

  static getSpousesName = (story: Story) => `${story.spousesName[0]} e ${story.spousesName[1]}`;
}
