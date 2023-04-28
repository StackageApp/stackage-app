import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';

import styles from '../../../sharedStyles';
import Post from '../../SharedComponents/Post';

function HomeFeed({ posts }) {
  return <FlatList data={posts} renderItem={(post) => <Post postData={post.item} />} />;
}

export default HomeFeed;
