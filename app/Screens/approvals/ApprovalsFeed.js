import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import moment from 'moment';

const Mev = require('../../../assets/users/Mev.png');

function ApprovalsFeed() {
  // DUMMY DATA
  const posts = [
    {
      id: '1',
      name: 'The Architect',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      timestamp: 1569109273726,
      avatar: Mev,
      approvedCount: 0,
    },
    {
      id: '2',
      name: 'Code Magician',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      timestamp: 1569109273726,
      avatar: Mev,
      approvedCount: 2,
    },
    {
      id: '3',
      name: 'Java Scriptor',
      text: 'Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.',
      timestamp: 1569109273726,
      avatar: Mev,
      approvedCount: 4,
    },
    {
      id: '4',
      name: 'Axios McAxios',
      text: 'At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.',
      timestamp: 1569109273726,
      avatar: Mev,
      approvedCount: 3,
    },
  ];

  // PLACEHOLDER POST COMPONENT
  function TempPost({ item }) {
    return (
      <View style={styles.feedItem}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.timestamp}>{moment(item.timestamp).fromNow()}</Text>
            </View>
          </View>
          <Text style={styles.post}>{item.text}</Text>
        </View>
        <View>
          <Text style={styles.approved}>Approval Votes: {item.approvedCount}/5</Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text>Swipe to Vote</Text>
      <FlatList data={posts} renderItem={TempPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9DAC1',
  },

  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: '#F7ECDE',
    borderRadius: 15,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 7,
    borderWidth: 1,
    borderColor: '#54bab9',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderColor: '#54bab9',
    borderWidth: 2,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#54bab9',
  },
  timestamp: {
    fontSize: 11,
    color: '#9ed2c6',
    marginTop: 4,
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: '#838899',
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16,
  },
  approved: {
    fontSize: 12,
    color: 'darkgrey',
  },
  vote: {
    backgroundColor: 'green',
    color: '#FFF',
    borderRadius: 4,
  },
});
export default ApprovalsFeed;
