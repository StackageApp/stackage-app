import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Tabs } from 'expo-router';
import { Badge } from 'react-native-elements';
import { useSelector } from 'react-redux';

export default function () {
  const [messageCount, setMessageCount] = useState(0);
  // using redux return use Provider wrapper error
  // const notifications = useSelector((state) => state.currentUser.notifications);

  // these axios calls need to move somewhere else
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/users/vY1hQh5wpwgI1zzaweeooEqyJAi1`)
      .then((response) => {
        // set message count to equal number of notifications
        setMessageCount(response.data.notifications);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBadgePress = () => {
    // insted of resetting the state, send a put request using axios to users/notifications/reset/:uid
    axios
      .patch(`http://127.0.0.1:3000/users/notifications/reset/vY1hQh5wpwgI1zzaweeooEqyJAi1`)
      .then((response) => {
        // set message count to equal number of notifications
        setMessageCount(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1B6B6B',
        },
        headerTintColor: '#D9D9D9',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarActiveTintColor: '#9ED2C6',
        tabBarStyle: {
          backgroundColor: '#1B6B6B',
        },
      }}
    >
      <Tabs.Screen
        name="HomeFeed"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Approvals"
        options={{
          title: 'Approvals',
          tabBarIcon: ({ color }) => (
            <Ionicons name="checkmark-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          title: 'Compose',
          tabBarIcon: ({ color }) => <Ionicons name="add" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TouchableOpacity onPress={handleBadgePress}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />
                {messageCount > 0 && (
                  <Badge
                    value={messageCount}
                    status="error"
                    badgeStyle={{ backgroundColor: 'red', marginLeft: 0 }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="person-sharp" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
