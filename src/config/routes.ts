export enum RouteEnum {
  home = '/',
  about = '/about/:block',
  catalog = '/catalog',
}

export enum AboutAnchorEnum {
  about = '/about/block3',
  contacts = '/about/block2',
  payAndDelivery = '/about/block1',
}

export const AboutAnchorArray = [
  AboutAnchorEnum.about,
  AboutAnchorEnum.contacts,
  AboutAnchorEnum.payAndDelivery,
];
