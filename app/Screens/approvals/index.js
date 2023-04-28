import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { approvalsPost } from '../../Redux/Slices/approvalsSlice';
import dummyApprovalsFeed from '../../Utils/mockApprovalsPosts';
import { postApi } from '../../api';
import ApprovalsFeed from './ApprovalsFeed';

function Approvals() {
  const posts = useSelector((store) => store.homeFeed.posts);
  // const posts = dummyApprovalsFeed;
  const dispatch = useDispatch();
  console.log(posts);
  // useEffect(() => {
  //   postApi.getAllPosts();
  //   // dispatch(approvalsPost());
  // }, []);

  return (
    <View>
      <ApprovalsFeed posts={posts} />
    </View>
  );
}

export default Approvals;
