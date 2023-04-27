import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { postApi } from '../../api'

// DISPATCH TO CHANGE STATE, SELECTOR TO GET STATE

import styles from '../../../sharedStyles';
// IMPORT REDUCER METHODS TO UPDATE STATE
import { returnTwo } from '../../Redux/Slices/homeSlice';
import Filters from './Filters';
import HomeFeed from './HomeFeed';

function HomePage() {
  // useSelector to return state goes to Store -> reducer method -> data
  const posts = useSelector((store) => store.homeFeed.posts);

  useEffect(() => {
    async function storeData() {
      await window.sessionStorage.clear();
      await window.sessionStorage.setItem('stackageHomeFeed', JSON.stringify(posts));
    }
    storeData();
  }, []);

  return (
    <View>
      {/* PASS REDUCER METHOD IN TO DISPATCH WITH ARGUMENTS TO CHANGE STATE */}

      {/* <Button onPress={() => dispatch(returnTwo('003'))}>Click here</Button> */}
      <Filters />
      <HomeFeed posts={posts} />
    </View>
  );
}

export default HomePage;
