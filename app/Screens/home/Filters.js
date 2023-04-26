import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { useDispatch } from 'react-redux';

import { filterCategory, filterHot, filterTop } from '../../Redux/Slices/homeSlice';

function Filters() {
  const dispatch = useDispatch();
  const [activeFilters, setActiveFilters] = useState({
    category: false,
    top: false,
    hot: false,
  });

  return (
    <View>
      <ScrollView horizontal>
        <Pressable
          onPress={() => {
            if (activeFilters.category) {
              setActiveFilters({ ...activeFilters, category: false });
              // remove filter
            } else {
              setActiveFilters({ ...activeFilters, category: true });
              dispatch(filterCategory('Virtual Reality'));
            }
          }}
        >
          <Text>Category </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            if (activeFilters.top) {
              setActiveFilters({ ...activeFilters, top: false });
              // remove filter
            } else {
              setActiveFilters({ ...activeFilters, top: true });
              dispatch(filterTop(5));
            }
          }}
        >
          <Text>Top </Text>
        </Pressable>
        {/* <Pressable>
          <Text>Top Weekly </Text>
        </Pressable> */}
        <Pressable
          onPress={() => {
            if (activeFilters.hot) {
              setActiveFilters({ ...activeFilters, hot: false });
              // remove filter
            } else {
              setActiveFilters({ ...activeFilters, hot: true });
              dispatch(filterHot('2023.04.24'));
            }
          }}
        >
          <Text>Hot </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default Filters;
