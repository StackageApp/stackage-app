import React from 'react';
import { Image, Text, View } from 'react-native';

import { dummyPost } from '../Utils/mockPosts';

export default function Post(props) {
  const { title, text, name, category, tags, link, likes, comments } = dummyPost;

  return (
    <View>
      <View className="post-header">
        {/* <Image /> */}
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
    </View>
  );
}
