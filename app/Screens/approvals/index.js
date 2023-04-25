import React from 'react';
import { Text, View } from 'react-native';

import { Link } from 'expo-router';

function Approvals() {
  return (
    <View>
      <Text>Approvals Feed Here</Text>
      <Link href="./Screens/landing">LandingPage</Link>
    </View>
  );
}

export default Approvals;
