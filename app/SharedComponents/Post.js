import React from 'react';
import { Image, Text, View } from 'react-native';

const dummyPost = {
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

export default function Post({ title, text, name, category, tags, link, likes, comments }) {
  return (
    <>
      <View className="post-header">
        <Image />
        <Text>{name}</Text>
        <Text>{category}</Text>
      </View>
      <View className="post-body">
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>{link}</Text>
      </View>
      <View className="post-footer">
        {tags.map((tag) => (
          <Text>{tag} |</Text>
        ))}
        <Text>
          {likes} Likes {comments.length} Comments
        </Text>
      </View>
    </>
  );
}
