import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';

import Post from '../../SharedComponents/Post';
import { profileApi } from '../../api';

export default function ProfileInfo() {
  const [tab, setTab] = useState(true);
  const uid = useSelector((store) => store.currentUser.uid);
  const posts = useSelector((store) => store.profileInfo.posts);

  useEffect(() => {
    profileApi.getProfileFeed(uid);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Pressable onPress={() => setTab(true)}>
          <Text style={tab ? styles.selectedTab : null}>Posts</Text>
        </Pressable>
        <Pressable onPress={() => setTab(false)}>
          <Text style={tab ? null : styles.selectedTab}>Saved</Text>
        </Pressable>
      </View>
      <FlatList data={posts} renderItem={(post) => <Post postData={post.item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '50%',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  selectedTab: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
