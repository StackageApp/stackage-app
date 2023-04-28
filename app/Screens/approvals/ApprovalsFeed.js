import React from 'react';
import { FlatList, View } from 'react-native';

import ApprovalPost from '../../SharedComponents/approvalsPost';

function ApprovalsFeed({ posts }) {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <ApprovalPost postData={item} />}
      />
    </View>
  );
}

export default ApprovalsFeed;
