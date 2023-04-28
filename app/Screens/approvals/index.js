import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useSelector } from 'react-redux';

import dummyApprovalsFeed from '../../Utils/mockApprovalsPosts';
import { postApi } from '../../api';
import ApprovalsFeed from './ApprovalsFeed';

function Approvals() {
  // const posts = useSelector((store) => store.approvalsFeed.posts);
  const posts = dummyApprovalsFeed;

  useEffect(() => {
    postApi.getAllPosts();
  }, []);

  return (
    <View>
      <ApprovalsFeed posts={posts} />
    </View>
  );
}

export default Approvals;
