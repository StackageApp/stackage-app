import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';

import store from '../Redux/Store';
import Approvals from '../Screens/approvals';

function ApprovalsMain() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Approvals />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9DAC1',
  },
});

export default ApprovalsMain;
