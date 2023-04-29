import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Messages from '../Data';
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

function MessagesScreen({ navigation }) {
  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Tile
            onPress={() =>
              navigation.navigate('ChatScreen', { userName: item.userName, id: item.id })
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
