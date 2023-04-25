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
} from './MessageStyles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Brandon',
    ProfileImg: require('../../../assets/users/Brandon.png'),
    messageTime: '4 mins ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Kyle',
    ProfileImg: require('../../../assets/users/Kyle.png'),
    messageTime: '2 hours ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Nam',
    ProfileImg: require('../../../assets/users/Nam.png'),
    messageTime: '1 hours ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Mev',
    ProfileImg: require('../../../assets/users/Mev.png'),
    messageTime: '1 day ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Jenessa',
    ProfileImg: require('../../../assets/users/Jenessa.png'),
    messageTime: '2 days ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Majd',
    ProfileImg: require('../../../assets/users/Majd.png'),
    messageTime: '2 days ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Donn',
    ProfileImg: require('../../../assets/users/Donn.png'),
    messageTime: '2 days ago',
    messageText: 'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '8',
    userName: 'Noah',
    ProfileImg: require('../../../assets/users/Noah.png'),
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
          <Tile onPress={() => navigation.navigate('Chat', { userName: item.userName })}>
            <UserInfo>
              <UserImgWrapper>
                <ProfileImg source={item.ProfileImg} />
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
