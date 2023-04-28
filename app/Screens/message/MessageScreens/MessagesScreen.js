import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import {
  Container,
  MessageText,
  MessageTime,
  ProfileImg,
  TextSection,
  Tile,
  UserImgWrapper,
  UserInfo,
  UserInfoText,
  UserName,
} from '../MessageStyles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Brandon',
    ProfileImg: require('../../../../assets/users/Brandon.png'),
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Kyle',
    ProfileImg: 'https://i.imgur.com/O9IwNcx.png',
    messageTime: '2 hours ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Nam',
    ProfileImg: 'https://i.imgur.com/swnqERH.png',
    messageTime: '1 hours ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: 'pbbQjIfF7abqfvKD38DOBAbgoHr2',
    userName: 'Mev',
    ProfileImg: 'https://i.imgur.com/Biw5Jsb.png',
    messageTime: '1 day ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Jenessa',
    ProfileImg: require('../../../../assets/users/Jenessa.png'),
    messageTime: '2 days ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Majd',
    ProfileImg: require('../../../../assets/users/Majd.png'),
    messageTime: '2 days ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Donn',
    ProfileImg: require('../../../../assets/users/Donn.png'),
    messageTime: '2 days ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
];

function MessagesScreen({ navigation }) {
  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Tile
            onPress={
              () => navigation.navigate('ChatScreen', { userName: item.userName, id: item.id }) // change item.id to _id to match incoming data object properties
            }
          >
            <UserInfo>
              <UserImgWrapper>
                <ProfileImg
                  source={
                    typeof item.ProfileImg === 'string' ? { uri: item.ProfileImg } : item.ProfileImg
                  }
                />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <MessageTime>{item.messageTime}</MessageTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Tile>
        )}
      />
    </Container>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
