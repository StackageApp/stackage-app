import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { postApi } from '../../api'

import styles from '../../../sharedStyles';
import Filters from './Filters';
import HomeFeed from './HomeFeed';

function HomePage() {
  const posts = useSelector((store) => store.homeFeed.posts);

  useEffect(() => {
    postApi.getAllPosts();
  }, []);

  return (
    <View>
      <Filters posts={posts}/>
      <HomeFeed posts={posts} />
    </View>
  );
}

export default HomePage;
