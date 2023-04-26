import React from 'react';
import { Button, Text, View } from 'react-native';

// DISPATCH TO CHANGE STATE, SELECTOR TO GET STATE
import { useDispatch, useSelector } from 'react-redux';

// IMPORT REDUCER METHODS TO UPDATE STATE
import { returnTwo } from '../../Redux/Slices/homeSlice';
import Post from '../../SharedComponents/Post';

function Home() {
  // useSelector to return state goes to Store -> reducer method -> data
  // const title = useSelector((store) => store.homeFeed.posts[0].uid);
  // const dispatch = useDispatch();

  return (
    <View>
      {/* <Text>{title}</Text> */}
      {/* PASS REDUCER METHOD IN TO DISPATCH WITH ARGUMENTS TO CHANGE STATE */}
      {/* <Button onPress={() => dispatch(returnTwo('003'))}>Click here</Button> */}
      {/* <Post /> */}
    </View>
  );
}

export default Home;
