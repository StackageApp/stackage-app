import React, { useCallback, useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { nanoid } from 'nanoid';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [testMessages, setTestMessages] = useState([]);
  const messageObj = {
    _id: 0,
    text: '',
    createdAt: new Date(),
    user: {
      _id: 0,
      name: '',
      avatar: require('../../../../assets/users/Donn.png'),
    },
  };
  const { message } = useSelector((state) => state.message);
  console.log('message', message);

  useEffect(() => {
    // axios get request here and assign the value of the response to the testMessages state
    axios
      .get('http://127.0.0.1:3000/users/vY1hQh5wpwgI1zzaweeooEqyJAi1')
      .then((response) => {
        setTestMessages(response.data);
        console.log('response', response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //
    console.log('testMessages', testMessages);
    setMessages(message);
    // setMessages([
    // {
    //   _id: 3,
    //   text: 'How are you doing today?',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //     avatar: require('../../../../assets/users/Donn.png'),
    //   },
    // },
    //   {
    //     _id: 2,
    //     text: 'Hello world',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 1,
    //       name: 'React Native',
    //       avatar: '',
    //     },
    //   },
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: require('../../../../assets/users/Donn.png'),
    //     },
    //   },
    // ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <MaterialCommunityIcons
          name="send-circle"
          style={{ marginBottom: 5, marginRight: 5 }}
          size={32}
          color="#1B6B6B"
        />
      </View>
    </Send>
  );

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#9ED2C6',
        },
        left: {
          backgroundColor: '#DADDDC',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
        left: {
          color: '#050000',
        },
      }}
    />
  );

  const scrollToBottomComponent = () => (
    <FontAwesome name="angle-double-down" size={22} color="#333" />
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      containerStyle={{ backgroundColor: '#fff' }}
    />
  );
}

export default ChatScreen;
