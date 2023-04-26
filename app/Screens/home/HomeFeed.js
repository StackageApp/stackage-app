import React from 'react';
import { FlatList, View } from 'react-native';

import styles from '../../../sharedStyles';
import Post from '../../SharedComponents/Post';

function HomeFeed({ posts }) {
  return (
    <View style={styles.container}>
      <FlatList data={posts} renderItem={(post) => <Post postData={post.item} />} />
    </View>
  );
}

export default HomeFeed;
