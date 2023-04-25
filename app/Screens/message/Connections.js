import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import {
  Container,
  ProfileImg,
  TextSection,
  Tile,
  UserImgWrapper,
  UserInfo,
  UserName,
} from './MessageStyles/MessageStyles';

const contacts = [
  {
    id: '1',
    userName: 'Brandon',
    ProfileImg: require('../../../assets/users/Brandon.png'),
  },
  {
    id: '2',
    userName: 'Kyle',
    ProfileImg: require('../../../assets/users/Kyle.png'),
  },
  {
    id: '3',
    userName: 'Nam',
    ProfileImg: require('../../../assets/users/Nam.png'),
  },
  {
    id: '4',
    userName: 'Mev',
    ProfileImg: require('../../../assets/users/Mev.png'),
  },
  {
    id: '5',
    userName: 'Jenessa',
    ProfileImg: require('../../../assets/users/Jenessa.png'),
  },
  {
    id: '6',
    userName: 'Majd',
    ProfileImg: require('../../../assets/users/Majd.png'),
  },
  {
    id: '7',
    userName: 'Donn',
    ProfileImg: require('../../../assets/users/Donn.png'),
  },
  {
    id: '8',
    userName: 'Noah',
    ProfileImg: require('../../../assets/users/Noah.png'),
  },
];

function Connections({ navigation }) {
  return (
    <Container>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Tile onPress={() => navigation.navigate('Profile', { userName: item.userName })}>
            <UserInfo>
              <UserImgWrapper>
                <ProfileImg source={item.ProfileImg} />
              </UserImgWrapper>
              <TextSection>
                <UserName>{item.userName}</UserName>
              </TextSection>
            </UserInfo>
          </Tile>
        )}
      />
    </Container>
  );
}

export default Connections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
