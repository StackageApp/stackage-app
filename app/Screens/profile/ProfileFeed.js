import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, View, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import Post from '../../SharedComponents/Post';
import profileApi from '../../api';

export default function ProfileInfo() {
  const [tab, setTab] = useState(true);
  const uid = useSelector(store => store.currentUser.uid);
  const posts = useSelector(store => store.profileInfo.posts);
  // const posts = [1, 2, 3];

  // useEffect(() => {
  //   console.log(uid)
  //   profileApi.getProfileFeed(uid);
  // }, [])

  return (
    <View>
      <View style={styles.tabs}>
        <Pressable onPress={() => setTab(true)}>
          <Text style={tab ? styles.selectedTab : null} >Posts</Text>
        </Pressable>
        <Pressable onPress={() => setTab(false)}>
          <Text style={tab ? null : styles.selectedTab} >Saved</Text>
        </Pressable>
      </View>
      <FlatList data={posts} renderItem={(post) => <Post postData={post.item} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  selectedTab: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
