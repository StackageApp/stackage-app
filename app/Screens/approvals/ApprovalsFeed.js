import React from 'react';
import { FlatList, View } from 'react-native';

import ApprovalPost from '../../SharedComponents/approvalsPost';

function ApprovalsFeed({ posts }) {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => <ApprovalPost postData={post.item} />}
      />
    </View>
  );
}

export default ApprovalsFeed;
