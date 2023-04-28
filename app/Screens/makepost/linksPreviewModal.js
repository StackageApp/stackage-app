// Currently nothing is calling this component. I wanted to save this work though to try to get this working in time to demo, but we'll see.
import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { LinkPreview } from '@flyerhq/react-native-link-preview';

function LinksModal(props) {
  const [currentLink, setCurrentLink] = useState('');
  const [links, setLinks] = useState(props.links);

  const handleLink = (input) => {
    setCurrentLink(input);
  };

  const onAddLink = () => {
    if (currentLink.length > 0) {
      const newLinks = links.slice();
      newLinks.push(currentLink);
      setLinks(newLinks);
      setCurrentLink('');
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
      </View>

      <View>
        <TextInput
          onChangeText={(input) => {
            handleLink(input);
          }}
          placeholder="Add a link here"
          style={styles.input}
          value={currentLink}
          KeyboardType="default"
        />
        <View styles={styles.evenRow}>
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
      </View>

      <ScrollView>
        {links.map((link) => (
          <LinkPreview text={link} metadataContainerStyle={styles.linkPreviewContainer} />
        ))}
      </ScrollView>
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
    flex: 1,
  },
  centerEverything: {
    alignItems: 'center',
    flex: 1,
  },
  instructions: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    margin: 30,
    flex: 1,
  },
  listItem: {
    margin: 10,
    fontSize: 15,
  },
  linkPreviewContainer: {
    flex: 2,
    paddingHorizontal: 24,
    fontSize: 10,
  },
});

export default LinksModal;
