export const dummyPost = {
  uid: 1,
  approved: true,
  likes: 5,
  title: 'Redux is hard',
  text: 'redux is tough. This better help or I am going to be mad',
  category: 'Mobile Development',
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
      text: 'Yeah, redux took awhile to understand!',
    },
    {
      name: 'Mev',
      text: "I don't know what you're talking about. It's easy!",
    },
  ],
};

export const dummyPost2 = {
  uid: 2,
  approved: true,
  likes: 10,
  title: 'Do it for the likes',
  text: 'I just want to get the most likes',
  category: 'Virtual Reality',
  tags: ['in', 'another', 'world'],
  comments: [
    {
      name: 'Majd',
      text: 'The most likes',
    },
    {
      name: 'Janessa',
      text: 'All the likes',
    },
  ],
};

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
