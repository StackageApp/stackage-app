import React from 'react';
import { Image, Text, View } from 'react-native';

const dummyPost = {
  id: 1,
  title: 'Redux is hard',
  textBody: 'redux is tough. This better help or I am going to be mad',
  name: 'Kyle',
  category: 'Mobile Development',
  tags: ['why', 'redux', 'help me'],
  link: ['https://redux.js.org/'],
  likes: 5,
  comments: [
    { name: 'Brandon', text: 'Yeah, redux took awhile to understand!' },
    { name: 'Mev', text: "I don't know what you're talking about. It's easy!" },
  ],
};

export default function Post({ title, textBody, name, category, tags, link, likes, comments }) {
  return (
    <>
      <View className="post-header">
        <Image />
        <Text>{name}</Text>
        <Text>{category}</Text>
      </View>
      <View className="post-body">
        <Text>{title}</Text>
        <Text>{textBody}</Text>
        <Text>{link}</Text>
      </View>
      <View className="post-footer">
        <Text>Tags</Text>
        <Text>
          {likes} Likes {comments.length} Comments
        </Text>
      </View>
    </>
  );
}
