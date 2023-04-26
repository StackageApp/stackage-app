import React from 'react';
import { FlatList, Text, View } from 'react-native';

// DUMMY DATA
const POSTS = [{ post: 'first' }, { post: 'second' }, { post: 'third' }];

// PLACEHOLDER POST COMPONENT
function TempPost() {
  return <Text>This will be a post soon!</Text>;
}

function ApprovalsFeed() {
  return (
    <View>
      <FlatList data={POSTS} renderItem={() => <TempPost />} />
    </View>
  );
}

export default ApprovalsFeed;
