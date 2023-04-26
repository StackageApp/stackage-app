export const dummyPost = {
  uid: 1,
  approved: true,
  likes: 5,
  title: 'Redux is hard',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
  category: 'Mobile Development',
  timestamp: '4.26.2023',
  tags: ['why', 'redux', 'help me'],
  links: [
    {
      title: 'redux',
      url: 'https://redux.js.org/',
    },
  ],
  comments: [
    {
      name: 'Brandon',
      text: 'Nemo, enim ipsam voluptatem quia voluptas sit',
    },
    {
      name: 'Mev',
      text: 'quis nostrum exercitationem ullam corporis suscipit!',
    },
  ],
};

export const dummyFeed = [
  {
    uid: 1,
    approved: true,
    likes: 5,
    title: 'Redux is hard',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    category: 'Mobile Development',
    timestamp: '4.26.2023',
    tags: ['why', 'redux', 'help me'],
    links: [
      {
        title: 'redux',
        url: 'https://redux.js.org/',
      },
    ],
    comments: [
      {
        name: 'Brandon',
        text: 'Nemo, enim ipsam voluptatem quia voluptas sit',
      },
      {
        name: 'Mev',
        text: 'quis nostrum exercitationem ullam corporis suscipit!',
      },
    ],
  },
  {
    uid: 2,
    approved: true,
    likes: 10,
    title: 'minim veniam',
    text: 'in voluptate velit esse cillum dolore',
    category: 'Virtual Reality',
    timestamp: '4.24.2023',
    tags: ['in', 'another', 'world'],
    comments: [
      {
        name: 'Majd',
        text: 'Excepteur sint occaecat cupidatat non proident',
      },
      {
        name: 'Janessa',
        text: 'deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    uid: 3,
    approved: true,
    likes: 6,
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'Virtual Reality',
    timestamp: '4.26.2023',
    tags: ['cool', 'tech', 'crazy'],
    comments: [
      {
        name: 'Nam',
        text: 'Duis aute irure dolor in reprehenderit',
      },
      {
        name: 'Donn',
        text: 'ut labore et dolore magna aliqua',
      },
    ],
  },
];

export const emptyPost = {
  uid: 0,
  approved: true,
  likes: 0,
  title: '',
  text: '',
  category: '',
  tags: [],
  links: [],
  comments: [],
};
