import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { useSelector } from 'react-redux';

// USE TO UPDATE POST STATE
import { newPost } from '../Redux/Slices/postSlice';

export default function Post() {
  const post = useSelector((store) => store.singlePost.post);
  const [tagsExist, setTagsExist] = useState(false);
  const [commentsExist, setCommentsExist] = useState(false);
  const { title, text, name, category, tags, link, likes, comments } = post;

  useEffect(() => {
    if (tags) {
      setTagsExist(true);
    }
    if (comments) {
      setCommentsExist(true);
    }
  }, [tags, comments]);

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
