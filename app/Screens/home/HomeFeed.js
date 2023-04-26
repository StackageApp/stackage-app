import React from 'react';
import { FlatList, View } from 'react-native';

import Post from '../../SharedComponents/Post';

function HomeFeed({ posts }) {
  return (
    <View>
      <FlatList data={posts} renderItem={() => <Post />} />
    </View>
  );
}

export default HomeFeed;
