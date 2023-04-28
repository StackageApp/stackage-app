import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import styles from '../../../sharedStyles';
import { filterCategory, filterHot, filterTop } from '../../Redux/Slices/homeSlice';
import { postApi } from '../../api';

function Filters({ posts }) {
  const dispatch = useDispatch();
  const [activeFilters, setActiveFilters] = useState({
    category: false,
    top: false,
    hot: false,
  });
  const [menu, setMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryList = new Set();
    posts.forEach((post) => {
      categoryList.add(post.category);
    });
    setCategories([...categoryList]);
  }, [posts]);

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
            {categories.map((category, i) => (
              <Pressable
                key={i}
                onPress={async () => {
                  if (activeFilters.category) {
                    setActiveFilters({ ...activeFilters, category: false });
                    postApi.getAllPosts();
                  } else {
                    setActiveFilters({ ...activeFilters, category: true });
                    dispatch(filterCategory(`${category}`));
                  }
                }}
              >
                <Text>{category}</Text>
              </Pressable>
            ))}
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
