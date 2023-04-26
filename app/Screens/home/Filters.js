import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { useDispatch } from 'react-redux';

import styles from '../../../sharedStyles';
import { filterCategory, filterHot, filterTop, newMessages } from '../../Redux/Slices/homeSlice';

function Filters() {
  const dispatch = useDispatch();
  const [activeFilters, setActiveFilters] = useState({
    category: false,
    top: false,
    hot: false,
  });
  const [menu, setMenu] = useState(false);

  return (
    <View style={styles.filters}>
      <ScrollView horizontal>
        <Pressable
          onPress={() => {
            if (menu) {
              setMenu(false);
            } else {
              setMenu(true);
            }
          }}
        >
          <Text>Category </Text>
        </Pressable>
        {menu && (
          <Pressable
            onPress={async () => {
              if (activeFilters.category) {
                setActiveFilters({ ...activeFilters, category: false });
                // remove filter
                const previousMessages = await JSON.parse(
                  window.sessionStorage.getItem('stackageHomeFeed')
                );
                dispatch(newMessages(previousMessages));
              } else {
                setActiveFilters({ ...activeFilters, category: true });
                dispatch(filterCategory('Virtual Reality'));
              }
            }}
          >
            <Text>Virtual Reality</Text>
          </Pressable>
        )}
        <Pressable
          onPress={async () => {
            if (activeFilters.top) {
              setActiveFilters({ ...activeFilters, top: false });
              // remove filter
              const previousMessages = await JSON.parse(
                window.sessionStorage.getItem('stackageHomeFeed')
              );
              dispatch(newMessages(previousMessages));
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
          onPress={async () => {
            if (activeFilters.hot) {
              setActiveFilters({ ...activeFilters, hot: false });
              // remove filter
              const previousMessages = await JSON.parse(
                window.sessionStorage.getItem('stackageHomeFeed')
              );
              dispatch(newMessages(previousMessages));
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
