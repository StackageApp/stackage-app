import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { dummyPost } from '../Utils/mockPosts';

export default function Post({ post }) {
  const { title, text, name, category, tags, link, likes, comments } = post;
  const [tagsExist, setTagsExists] = useState(false);

  useEffect(() => {
    if (tags) {
      setTagsExists(true);
    }
  }, [tags]);

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
        <View>{tagsExist && tags.map((tag, i) => <Text key={i}>{tag} |</Text>)}</View>
        <Text>
          {likes} Likes {comments.length} Comments
        </Text>
      </View>
    </View>
  );
}
