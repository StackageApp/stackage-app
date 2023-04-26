import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { dummyPost } from '../Utils/mockPosts';

export default function Post({ postData }) {
  const [{ title, text, name, category, tags, link, likes, comments }, setPost] =
    useState(dummyPost);
  const [tagsExist, setTagsExist] = useState(false);
  const [commentsExist, setCommentsExist] = useState(false);

  useEffect(() => {
    if (tags) {
      setTagsExist(true);
    }
    if (comments) {
      setCommentsExist(true);
    }
  }, [tags, comments]);

  useEffect(() => {
    if (postData) {
      setPost(postData);
    }
  }, [postData]);

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
        {tagsExist && tags.map((tag, i) => <Text key={i}>{tag} |</Text>)}
        <Text>
          {likes} Likes {commentsExist && comments.length} Comments
        </Text>
      </View>
    </View>
  );
}
