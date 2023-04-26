import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { useDispatch } from 'react-redux';

import { filterCategory, filterTop } from '../../Redux/Slices/homeSlice';

function Filters() {
  const dispatch = useDispatch();

  return (
    <View>
      <ScrollView horizontal>
        <Pressable onPress={() => dispatch(filterCategory('Mobile Development'))}>
          <Text>Category </Text>
        </Pressable>
        <Pressable onPress={() => dispatch(filterTop(5))}>
          <Text>Top </Text>
        </Pressable>
        {/* <Pressable>
          <Text>Top Weekly </Text>
        </Pressable> */}
        {/* <Pressable>
          <Text>Hot </Text>
        </Pressable> */}
      </ScrollView>
    </View>
  );
}

export default Filters;
