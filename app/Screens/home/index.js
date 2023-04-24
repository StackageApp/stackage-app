import React from 'react';
import { View } from 'react-native';

import Filters from './Filters';
import HomeFeed from './HomeFeed';

function HomePage() {
  return (
    <View>
      <Filters />
      <HomeFeed />
    </View>
  );
}

export default HomePage;
