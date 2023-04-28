// eslint-disable-next-line import/prefer-default-export
export const mockMessages = [
  {
    _id: 3,
    text: 'How are you doing today?',
    createdAt: Date.now(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: "require('../../../../assets/users/Donn.png')",
    },
  },
  {
    _id: 2,
    text: 'Hello world',
    createdAt: Date.now(),
    user: {
      _id: 1,
      name: 'React Native',
      avatar: '',
    },
  },
  {
    _id: 1,
    text: 'Hello developer',
    createdAt: Date.now(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: "require('../../../../assets/users/Donn.png')",
    },
  },
];
