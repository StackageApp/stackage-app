import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import styles from '../../../sharedStyles';
import { postApi } from '../../api';
import Filters from './Filters';
import HomeFeed from './HomeFeed';

function HomePage() {
  const posts = useSelector((store) => store.homeFeed.posts);
  const likes = useSelector((store) => store.homeFeed.posts.map((post) => post.likes));

  useEffect(() => {
    postApi.getAllPosts();
  }, [likes]);

  return (
    <>
      <Filters posts={posts} />
      <HomeFeed posts={posts} />
    </>
  );
}

export default HomePage;
