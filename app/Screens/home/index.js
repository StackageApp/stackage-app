import React from 'react';
import { Button, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

// DISPATCH TO CHANGE STATE, SELECTOR TO GET STATE
// IMPORT REDUCER METHODS TO UPDATE STATE
import { returnTwo } from '../../Redux/Slices/homeSlice';
import Post from '../../SharedComponents/Post';
import Filters from './Filters';
import HomeFeed from './HomeFeed';

function HomePage() {
  // useSelector to return state goes to Store -> reducer method -> data
  const title = useSelector((store) => store.homeFeed.posts[0].uid);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{title}</Text>
      {/* PASS REDUCER METHOD IN TO DISPATCH WITH ARGUMENTS TO CHANGE STATE */}
      {/* <Button onPress={() => dispatch(returnTwo('003'))}>Click here</Button> */}
      <Post />
      <Filters />
      <HomeFeed />
    </View>
  );
}

export default HomePage;
