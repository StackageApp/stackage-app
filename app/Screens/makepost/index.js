import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useSelector } from 'react-redux';

import { makePostAPI } from '../../api';
import AfterSuccessModal from './afterSuccessModal.js';
import CategoryModal from './categoryModal.js';
import LinksModal from './linksModal.js';
import SuccessModal from './successModal.js';
import TagsModal from './tagsModal.js';

function PostMessage() {
  const [showView, setShowView] = useState('main');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState('');
  const [links, setLinks] = useState([]);
  const [postObj, setPostObj] = useState({
    uid: '',
    timestamp: '',
    title: '',
    text: '',
    tags: [],
    category: '',
    links: [],
    name: '',
  });
  const uid = useSelector((store) => store.currentUser.uid);
  const name = useSelector((store) => store.currentUser.userInfo.name);

  const handleInput = (input, field) => {
    if (field === 'title') {
      setTitle(input);
    }

    if (field === 'text') {
      setText(input);
    }
  };

  const updateTags = (tagsArray) => {
    setTags(tagsArray);
  };

  const updateLinks = (linksArray) => {
    setLinks(linksArray);
  };

  const buildPostObject = () => {
    const newPost = {};
    // TODO: get user's unique id to put here.
    newPost.uid = uid;
    newPost.timestamp = Date.now();
    newPost.title = title || '';
    newPost.text = text || '';
    newPost.tags = tags || [];
    newPost.category = category || '';
    newPost.links = links || [];
    newPost.name = name;

    setPostObj(newPost);
  };

  const sendPost = () => {
    buildPostObject();
    makePostAPI.postThis(postObj);
    setShowView('after success');
    resetState();
  };

  const resetState = () => {
    setTitle('');
    setText('');
    setTags([]);
    setCategory('');
    setLinks([]);
    setPostObj({});
  };

  return (
    <KeyboardAvoidingView>
      {showView === 'main' ? (
        <View>
          <View style={styles.fixToRight}>
            <Link href="../../Navigation/HomeFeed">
              <Text style={styles.close}>X</Text>
            </Link>
          </View>
          <Text style={styles.labelField}>Title</Text>
          <TextInput
            id="title"
            editable
            numberOfLines={1}
            maxLength={100}
            onChangeText={(input) => {
              handleInput(input, 'title');
            }}
            value={title}
            placeholder="Title"
            style={styles.input}
            KeyboardType="default"
            clearButtonMode="always"
          />
          <Text style={styles.labelField}>Text</Text>
          <TextInput
            id="text"
            editable
            multiline
            numberOfLines={12}
            maxLength={500}
            onChangeText={(input) => {
              handleInput(input, 'text');
            }}
            value={text}
            placeholder="Write your post here."
            style={styles.longInput}
            KeyboardType="default"
            clearButtonMode="always"
          />
          <View style={styles.evenRow}>
            <View>
              <Ionicons
                name="ios-pricetags-outline"
                size={30}
                color="black"
                onPress={() => {
                  setShowView('tags');
                }}
              />
              <Text style={styles.buttonLabel}>Tags</Text>
            </View>
            <View>
              <View style={styles.adjustCategoryIcon}>
                <Ionicons
                  name="grid-outline"
                  size={30}
                  color="black"
                  onPress={() => {
                    setShowView('category');
                  }}
                />
              </View>
              <Text style={styles.buttonLabel}>Category</Text>
            </View>
            <View>
              <Ionicons
                name="link-outline"
                size={30}
                color="black"
                onPress={() => {
                  setShowView('links');
                }}
              />
              <View style={styles.adjustLinkText}>
                <Text style={styles.buttonLabel}>Links</Text>
              </View>
            </View>
            <Pressable
              title="Post"
              onPress={() => {
                buildPostObject();
                setShowView('success');
              }}
              style={styles.postButton}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
      {showView === 'tags' ? (
        <TagsModal updateTags={updateTags} setShowView={setShowView} tags={tags} />
      ) : null}
      {showView === 'category' ? (
        <CategoryModal setShowView={setShowView} setCategory={setCategory} />
      ) : null}
      {showView === 'links' ? (
        <LinksModal updateLinks={updateLinks} setShowView={setShowView} links={links} />
      ) : null}
      {showView === 'success' ? (
        <SuccessModal setShowView={setShowView} postObj={postObj} sendPost={sendPost} />
      ) : null}
      {showView === 'after success' ? (
        <AfterSuccessModal setShowView={setShowView} resetState={resetState} />
      ) : null}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  longInput: {
    height: 200,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  fixToRight: {
    flexDirection: 'row-reverse',
    padding: 10,
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  postButton: {
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
  postButtonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  close: {
    color: '#54bab9',
    fontSize: 17,
    marginRight: 10,
  },
  labelField: {
    fontSize: 10,
    marginLeft: 20,
    marginBottom: 0,
  },
  buttonLabel: {
    fontSize: 10,
  },
  alignCenter: {
    alignItems: 'center',
  },
  adjustCategoryIcon: {
    paddingLeft: 6,
  },
  adjustLinkText: {
    paddingLeft: 2,
  },
});

export default PostMessage;
