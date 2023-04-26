import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Post from '../../SharedComponents/Post';

export default function ProfileInfo() {
  const [tab, setTab] = useState(true);
  const posts = [1, 2, 3];

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
      {posts.map((post) => <Post key={post} />)}
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
