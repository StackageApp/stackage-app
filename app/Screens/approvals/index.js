import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { approvalsPost } from '../../Redux/Slices/approvalsSlice';
import dummyApprovalsFeed from '../../Utils/mockApprovalsPosts';
import { postApi } from '../../api';
import ApprovalsFeed from './ApprovalsFeed';

function Approvals() {
  const posts = useSelector((store) => store.homeFeed.posts);
  const [unapprovedPosts, setUnapprovedPosts] = useState(posts);
  // const posts = dummyApprovalsFeed;
  const dispatch = useDispatch();

  useEffect(() => {
    postApi.getAllPosts();
    setUnapprovedPosts(posts.filter((post) => post.isApproved === false));
  }, []);

  return (
    <View>
      <ApprovalsFeed posts={posts} />
    </View>
  );
}

export default Approvals;
