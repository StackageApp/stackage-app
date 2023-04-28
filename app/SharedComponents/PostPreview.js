import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from '../../sharedStyles';
import { postApi } from '../api';

export default function PostPreview({ postData }) {
  const [{ title, text, name, category, tags, link, likes, comments, id }, setPost] =
    useState(postData);
  const [tagsExist, setTagsExist] = useState(false);

  useEffect(() => {
    if (tags) {
      setTagsExist(true);
    }
  }, [tags]);

  useEffect(() => {
    if (postData) {
      setPost(postData);
    }
  }, [postData]);

  return (
    <View style={styles.postContainer}>
      <View className="post-header" style={styles.postHeader}>
        <View style={styles.postCategory}>
          <View style={{ overflow: 'hidden', borderBottomLeftRadius: 25 }}>
            <Text
              style={{
                backgroundColor: '#e9dac1',
                paddingLeft: 15,
                textAlign: 'right',
                paddingRight: 10,
                fontSize: 10,
                color: '#54bab9',
                fontWeight: 600,
                paddingBottom: 2,
              }}
            >
              {category}
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 16,
              borderColor: '#9ed2c6',
              borderWidth: 1.5,
              textAlign: 'center',
            }}
          >
            PFP
          </Text>
          <View style={{ width: '85%', gap: 10 }}>
            <View className="post-body" style={styles.postBody}>
              <Text style={styles.postTitle}>{title}</Text>
              <Text
                style={{
                  paddingBottom: 15,
                  paddingTop: 10,
                  color: '#54bab9',
                  fontWeight: 600,
                  fontSize: 12,
                }}
              >
                posted by {name}{' '}
              </Text>
              <Text>{text}</Text>
              <Text>{link}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="post-footer" style={styles.postFooter}>
        <View style={styles.postTags}>
          {tagsExist &&
            tags.map((tag, i) =>
              i === tags.length - 1 ? (
                <Text key={i} style={styles.tag}>
                  {tag}
                </Text>
              ) : (
                <Text key={i} style={styles.tag}>
                  {tag} |{' '}
                </Text>
              )
            )}
        </View>
      </View>
    </View>
  );
}
