import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

export default function Post({ post }) {
  const { title, text, name, category, tags, link, likes, comments } = post;
  const [tagsExist, setTagsExist] = useState(false);

  useEffect(() => {
    if (tags) {
      setTagsExist(true);
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
        {tagsExist && tags.map((tag) => <Text>{tag} |</Text>)}
        <Text>
          {likes} Likes {comments.length} Comments
        </Text>
      </View>
    </View>
  );
}
