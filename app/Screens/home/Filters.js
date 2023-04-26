import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { filterTop } from '../../Redux/Slices/homeSlice';

function Filters() {
  return (
    <View>
      <ScrollView horizontal>
        <Pressable onPress={() => filterTop()}>
          <Text>Category</Text>
        </Pressable>
        <Pressable>
          <Text>Top</Text>
        </Pressable>
        <Pressable>
          <Text>Top Weekly</Text>
        </Pressable>
        <Pressable>
          <Text>Hot</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default Filters;
