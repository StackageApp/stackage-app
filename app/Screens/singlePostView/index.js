import React from 'react';
import { FlatList, Text, View } from 'react-native';

import Post from '../../SharedComponents/Post';

export default function PostView() {
  return (
    <>
      <Post />
      <FlatList />
    </>
  );
}
