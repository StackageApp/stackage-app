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
    // filteredPosts = posts.filter(post => post.isApproved === false)
    setUnapprovedPosts(
      posts
        .filter((post) => post.isApproved === false)
        .sort((a, b) => new Date(b.timestamp - new Date(a.timestamp)))
    );
  }, []);

  return (
    <View>
      <ApprovalsFeed posts={unapprovedPosts} />
    </View>
  );
}

export default Approvals;
