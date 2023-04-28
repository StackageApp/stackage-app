import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import styles from '../../sharedStyles';
import { dummyPost } from '../Utils/mockPosts';
import { postApi } from '../api';

export default function Post({ postData }) {
  let [{ title, text, name, category, tags, link, likes, comments, id }, setPost] =
    useState(dummyPost);
  const [tagsExist, setTagsExist] = useState(false);
  const [commentsExist, setCommentsExist] = useState(false);
  const [commentView, setCommentView] = useState(false);

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

  function toggleComments() {
    if (commentView) {
      setCommentView(false);
    } else {
      setCommentView(true);
    }
  }

  return (
    <View style={styles.postContainer}>
      <View className="post-header" style={styles.postHeader}>
        <View style={styles.postCategory}>
          <Text
            style={{
              backgroundColor: '#e9dac1',
              borderBottomLeftRadius: 50,
              overflow: 'hidden',
            }}
          >
            {category}
          </Text>
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
          <Pressable
            onPress={() => {
              postApi.incrementLikeBy1(id);
              setPost({ ...postData, likes: (likes += 1) });
            }}
          >
            <Text>{likes} Likes</Text>
          </Pressable>
          <Pressable onPress={() => toggleComments()}>
            <Text>{commentsExist && comments.length} Comments</Text>
          </Pressable>
        </View>
      </View>
      {commentView &&
        comments.map((comment, i) => (
          <View key={i}>
            <Text>{comment.author}</Text>
            <Text>{comment.text}</Text>
          </View>
        ))}
    </View>
  );
}
