import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

function LinksModal(props) {
  const [currentLink, setCurrentLink] = useState('');
  const [links, setLinks] = useState(props.links);
  const [warning, setWarning] = useState(false);

  const handleLink = (input) => {
    setCurrentLink(input);
  };

  const onAddLink = () => {
    if (currentLink.length > 0) {
      if (currentLink.slice(currentLink.length - 4) !== '.com') {
        setWarning(true);
      } else {
        setWarning(false);
        const newLinks = links.slice();
        newLinks.push(currentLink);
        setLinks(newLinks);
        setCurrentLink('');
      }
    }
  };

  const onDone = () => {
    onAddLink();
    props.updateLinks(links);
    props.setShowView('main');
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.fixToRight}>
        <Button
          title="X"
          onPress={() => {
            onDone();
          }}
          color="#54bab9"
        />
      </View>
      <View style={styles.centerEverything}>
        <Text style={styles.instructions}>Add your links here</Text>
        <View>
          {links.map((link, index) => (
            <Text key={index} style={styles.listItem}>
              {link}
            </Text>
          ))}
        </View>
      </View>
      <TextInput
        onChangeText={(input) => {
          handleLink(input);
        }}
        placeholder="Add a link here"
        style={styles.input}
        value={currentLink}
        KeyboardType="default"
      />
      {warning ? (
        <Text style={styles.warningText}>Invalid link format. Please try again.</Text>
      ) : null}

      <View style={styles.evenRow}>
        {links.length < 5 ? (
          <Pressable>
            <AntDesign
              name="pluscircle"
              size={45}
              color="#54bab9"
              onPress={() => {
                onAddLink();
              }}
            />
          </Pressable>
        ) : null}

        <Pressable
          title="Done"
          onPress={() => {
            onDone();
          }}
          style={styles.doneButton}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  fixToRight: {
    flexDirection: 'row-reverse',
    padding: 10,
  },
  doneButton: {
    height: 50,
    width: 70,
    backgroundColor: '#54bab9',
    color: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 3,
  },

  doneButtonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  centerEverything: {
    alignItems: 'center',
  },
  instructions: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    margin: 30,
  },
  listItem: {
    margin: 10,
    fontSize: 15,
  },
  warningText: {
    marginLeft: 20,
    color: 'red',
  },
});

export default LinksModal;
