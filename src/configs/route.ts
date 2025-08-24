export interface RouteItem {
  href?: string;
  label: string;
  key: string;
  children?: RouteItem[];
}

export const routes: RouteItem[] = [
  {
    href: '/',
    label: 'Home',
    key: 'home',
  },
  {
    label: 'The Adventure',
    key: 'the-adventure',
    children: [
      {
        href: '/guild-mission',
        label: 'Guild Mission',
        key: 'guild-mission',
      },
      {
        href: '/challengers',
        label: 'The Challengers',
        key: 'challengers',
      },
    ],
  },
  {
    label: 'Participate',
    key: 'participate',
    children: [
      {
        href: '/creator-merchant',
        label: 'Creator Market',
        key: 'creator-market',
      },
      {
        href: '/creative',
        label: 'Creative Zone',
        key: 'creative-zone',
      },
      {
        href: '/exhibitor',
        label: 'Exhibitor Zone',
        key: 'exhibitor-zone',
      },
      {
        href: '/food-market',
        label: 'Food & Beverage Market',
        key: 'food-beverage-market',
      },
      {
        href: '/benefit-creator',
        label: 'Creator Benefits',
        key: 'creator-benefits',
      },
    ],
  },
  {
    label: 'About',
    key: 'about',
    children: [
      {
        href: '/concept',
        label: 'Our Concept',
        key: 'our-concept',
      },
      {
        href: '/journals',
        label: 'Journals',
        key: 'journals',
      },
    ],
  },
];
