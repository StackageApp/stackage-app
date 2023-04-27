import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { postApi } from "../../api"

import styles from '../../../sharedStyles';
import { filterCategory, filterHot, filterTop } from '../../Redux/Slices/homeSlice';

function Filters({ posts }) {
  const dispatch = useDispatch();
  const [activeFilters, setActiveFilters] = useState({
    category: false,
    top: false,
    hot: false,
  });
  const [menu, setMenu] = useState(false);

  function getCategories() {
    return posts.map((post) => (
        <Pressable key={post.id}
              onPress={async () => {
                if (activeFilters.category) {
                  setActiveFilters({ ...activeFilters, category: false });
                  postApi.getAllPosts();
                } else {
                  setActiveFilters({ ...activeFilters, category: true });
                  dispatch(filterCategory(`${post.category}`));
                }
              }}
            >
              <Text>{post.category}</Text>
            </Pressable>
      ))
  }

  return (
    <View>
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
          <ScrollView>
            {getCategories()}
          </ScrollView>
        )}
        <Pressable
          onPress={async () => {
            if (activeFilters.top) {
              setActiveFilters({ ...activeFilters, top: false });
              // remove filter
              postApi.getAllPosts();
            } else {
              setActiveFilters({ ...activeFilters, top: true });
              dispatch(filterTop(5));
            }
          }}
        >
          <Text>Top </Text>
        </Pressable>
        <Pressable
          onPress={async () => {
            if (activeFilters.hot) {
              setActiveFilters({ ...activeFilters, hot: false });
              // remove filter
              postApi.getAllPosts();
            } else {
              setActiveFilters({ ...activeFilters, hot: true });
              dispatch(filterHot(Date.now()));
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
