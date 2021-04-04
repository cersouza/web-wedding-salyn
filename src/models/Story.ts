interface StoryEvent {
  dateTime: string,
  address: string,
  iframeAddressUrl: string
}

interface StoryButton {
  label: string,
  redirectTo: string,
  targetRedirect: '_blank' | '_self',
  class: string,
  filter: string
}

interface StoryPage  {
  id: string,
  title: string,
  template: string
}

type Story = {
  _id: string,
  uniqueName: string,
  urlBackgroundImage: string,
  urlConfirmacaoPresenca?: string,
  spousesName: Array<string>,
  event: StoryEvent,
  buttons: Array<StoryButton>,
  pages: Array<StoryPage>
}

export type {
  Story,
  StoryPage,
  StoryEvent,
  StoryButton
}