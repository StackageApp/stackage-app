import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Post from '../../SharedComponents/Post';

export default function ProfileInfo() {
  const [tab, setTab] = useState(true);
  const posts = [{}];

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
      <View style={{ borderColor: 'black', borderWidth: 4, width: '100%', height: '100%' }}>
        {posts.map((post) => (
          <Post key={post} />
        ))}
      </View>
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
