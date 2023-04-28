import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import styles from '../../sharedStyles';
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
    <View style={styles.postContainer}>
      <View className="post-header" style={styles.postHeader}>
        <View style={styles.postCategory}>
          <Text>{category}</Text>
        </View>
        <View style={styles.main}>
          {/* <Image src={}/> */}
          <Text style={{ width: '10%' }}>PFP</Text>
          <View style={{ width: '85%', gap: 10 }}>
            <Text>{name} @nameOrEmail</Text>
            <View className="post-body" style={styles.postBody}>
              <Text style={styles.postTitle}>{title}</Text>
              <Text>{text}</Text>
              <Text>{link}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="post-footer" style={styles.postFooter}>
        <View style={styles.postTags}>
          {tagsExist &&
            tags.map((tag, i) =>
              i === tags.length - 1 ? <Text key={i}>{tag}</Text> : <Text key={i}>{tag} | </Text>
            )}
        </View>
        <View style={styles.postCommentLikes}>
          <Text>{likes} Likes</Text>
          <Text>{commentsExist && comments.length} Comments</Text>
        </View>
      </View>
    </View>
  );
}
