import React from 'react';
import { View } from 'react-native';

import ApprovalsFeed from './ApprovalsFeed';
import Filters from './Filters';

function Approvals() {
  return (
    <View>
      <Filters />
      <ApprovalsFeed />
    </View>
  );
}

export default Approvals;
