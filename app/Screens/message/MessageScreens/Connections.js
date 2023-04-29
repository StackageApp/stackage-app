import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Messages from '../Data';
import {
  Container,
  ProfileImg,
  TextSection,
  Tile,
  UserImgWrapper,
  UserInfo,
  UserName,
} from '../MessageStyles/MessageStyles';

const contacts = Messages;

function Connections({ navigation }) {
  return (
    <Container>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Tile
            onPress={() =>
              navigation.navigate('ChatScreen', { userName: item.userName, id: item.id })
            }
          >
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
