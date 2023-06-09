import React, { useCallback, useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { nanoid } from 'nanoid';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';

function ChatScreen({ route }) {
  const uid = useSelector((store) => store.currentUser.uid) || 'vY1hQh5wpwgI1zzaweeooEqyJAi1';
  const { id } = route.params;

  // console.log('id: ', id);
  // console.log('userId: ', uid);

  const [messages, setMessages] = useState([]);

  // redux message data
  // const { message } = useSelector((state) => state.message);

  useEffect(() => {
    // Fetch messages every 1 second
    const fetchMessages = () => {
      axios
        .get(`http://18.219.151.178:3000/users/${uid}`)
        .then((response) => {
          const messagesThread = response.data.messages[id];
          // reverse the order of messages
          messagesThread.reverse();
          setMessages(messagesThread);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // Call fetchMessages initially
    fetchMessages();

    // Set up interval to call fetchMessages every 1 second
    const intervalId = setInterval(fetchMessages, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    // console.log('on send', messages);
    const postObj = { message: messages[0] };
    // setSentMessages(postObj);
    axios
      .post(`http://18.219.151.178:3000/users/messages/${uid}/${id}`, postObj)
      .then((response) => {
        // console.log('post sucessful', response);
      })
      .catch((error) => {
        console.log(error);
      });

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
        _id: uid,
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
