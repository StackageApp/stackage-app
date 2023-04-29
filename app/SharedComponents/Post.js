import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import styles from '../../sharedStyles';
import { dummyPost } from '../Utils/mockPosts';
import { postApi } from '../api';

const Brandon = require('../../assets/users/Brandon.png');
const Donn = require('../../assets/users/Donn.png');
const Jenessa = require('../../assets/users/Jenessa.png');
const Kyle = require('../../assets/users/Kyle.png');
const Majd = require('../../assets/users/Majd.png');
const Nam = require('../../assets/users/Nam.png');
const Mev = require('../../assets/users/Mev.png');

export default function Post({ postData }) {
  let [{ title, text, name, category, tags, link, likes, comments, id }, setPost] =
    useState(dummyPost);
  const [tagsExist, setTagsExist] = useState(false);
  const [commentsExist, setCommentsExist] = useState(false);
  const [commentView, setCommentView] = useState(false);
  const [avatar, setAvatar] = useState('');

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

  useEffect(() => {
    if (name === 'Brandon Woods') {
      setAvatar(Brandon);
    }
    if (name === 'Kyle Stevens') {
      setAvatar(Kyle);
    }
    if (name === 'Donn Neufeld') {
      setAvatar(Donn);
    }
    if (name === 'Jenessa Peterson') {
      setAvatar(Jenessa);
    }
    if (name === 'Majd Saleh') {
      setAvatar(Majd);
    }
    if (name === 'Mevludin Causevic') {
      setAvatar(Mev);
    }
    if (name === 'Nam Nguyen') {
      setAvatar(Nam);
    }
  });

  return (
    <View style={styles.postContainer}>
      <View className="post-header" style={styles.postHeader}>
        <View style={styles.postCategory}>
          <View style={{ overflow: 'hidden', borderBottomLeftRadius: 25 }}>
            <Text style={localStyles.category}>{category}</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Image style={localStyles.pfp} source={avatar} alt="PFP" />
          {/* <Text
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 16,
              borderColor: '#9ed2c6',
              borderWidth: 1.5,
              textAlign: 'center',
            }}
          >
            PFP
          </Text> */}
          <View style={{ width: '85%', gap: 10 }}>
            <View className="post-body" style={styles.postBody}>
              <Text style={styles.postTitle}>{title}</Text>
              <Text style={localStyles.name}>posted by {name} </Text>
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
              i === tags.length - 1 ? (
                <Text key={i} style={styles.tag}>
                  {tag}
                </Text>
              ) : (
                <Text key={i} style={styles.tag}>
                  {tag} |{' '}
                </Text>
              )
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

const localStyles = StyleSheet.create({
  category: {
    backgroundColor: '#e9dac1',
    paddingLeft: 15,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 10,
    color: '#54bab9',
    fontWeight: 600,
    paddingBottom: 2,
  },
  name: {
    paddingBottom: 15,
    paddingTop: 10,
    color: '#54bab9',
    fontWeight: 600,
    fontSize: 12,
  },
  pfp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    borderColor: '#9ed2c6',
    borderWidth: 1.5,
  },
});
