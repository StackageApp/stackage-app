import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import styles from '../../sharedStyles';
import { dummyApprovalsPost } from '../Utils/mockApprovalsPosts';
import { postApi } from '../api';

export default function ApprovalPost({ postData }) {
  const [{ title, text, name, category, tags, link, likes, comments, userAvatar }, setPost] =
    useState(dummyApprovalsPost);
  const [tagsExist, setTagsExist] = useState(false);
  const [commentsExist, setCommentsExist] = useState(false);
  const [commentView, setCommentView] = useState(false);

  useEffect(() => {
    if (tags) {
      setTagsExist(true);
    }
    if (comments) {
      setCommentsExist(true);
    }
  }, [tags, comments]);

  useEffect(() => {
    if (postData) {
      setPost(postData);
    }
  }, [postData]);
  function toggleComments() {
    if (commentView) {
      setCommentView(false);
    } else {
      setCommentView(true);
    }
  }

  return (
    <View style={styles.postContainer}>
      <View className="post-header" style={styles.postHeader}>
        <View style={styles.postCategory}>
          <Text>{category}</Text>
        </View>
        <View style={styles.main}>
          {/* <Image src={}/> */}
          <Text style={{ width: '10%' }}>PFP</Text>
          <View style={{ width: '85%', gap: 10 }}>
            <Text>{name} @nameOrEmail</Text>
            <View className="post-body" style={styles.postBody}>
              <Text style={styles.postTitle}>{title}</Text>
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
              i === tags.length - 1 ? <Text key={i}>{tag}</Text> : <Text key={i}>{tag} | </Text>
            )}
        </View>
        <View style={styles.postCommentLikes}>
          <Pressable
            onPress={() => {
              postApi.incrementLikeBy1(id);
              setPost({ ...postData, likes: (likes += 1) });
            }}
          >
            <Text>{likes} Likes</Text>
          </Pressable>
          <Pressable onPress={() => toggleComments()}>
            <Text>{commentsExist && comments.length} Comments</Text>
          </Pressable>
        </View>
      </View>
      {commentView &&
        comments.map((comment, i) => (
          <View key={i}>
            <Text>{comment.author}</Text>
            <Text>{comment.text}</Text>
          </View>
        ))}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EBECF4',
//   },

//   feed: {
//     marginHorizontal: 16,
//   },
//   feedItem: {
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     padding: 8,
//     flexDirection: 'row',
//     marginVertical: 8,
//   },
//   avatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginRight: 16,
//   },
//   name: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#454D65',
//   },
//   timestamp: {
//     fontSize: 11,
//     color: '#C4C6CE',
//     marginTop: 4,
//   },
//   post: {
//     marginTop: 16,
//     fontSize: 14,
//     color: '#838899',
//   },
//   postImage: {
//     width: undefined,
//     height: 150,
//     borderRadius: 5,
//     marginVertical: 16,
//   },
// });

// PLACEHOLDER POST COMPONENT
// function TempPost({ item }) {
//   return (
//     <View style={styles.feedItem}>
//       <Image source={item.avatar} style={styles.avatar} />
//       <View style={{ flex: 1 }}>
//         <View
//           style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
//         >
//           <View>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.timestamp}>{moment(item.timestamp).fromNow()}</Text>
//           </View>
//         </View>
//         <Text style={styles.post}>{item.text}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EBECF4',
//   },

//   feed: {
//     marginHorizontal: 16,
//   },
//   feedItem: {
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     padding: 8,
//     flexDirection: 'row',
//     marginVertical: 8,
//   },
//   avatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginRight: 16,
//   },
//   name: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#454D65',
//   },
//   timestamp: {
//     fontSize: 11,
//     color: '#C4C6CE',
//     marginTop: 4,
//   },
//   post: {
//     marginTop: 16,
//     fontSize: 14,
//     color: '#838899',
//   },
//   postImage: {
//     width: undefined,
//     height: 150,
//     borderRadius: 5,
//     marginVertical: 16,
//   },
// });

// DUMMY DATA
// const posts = [
//   {
//     id: '1',
//     name: 'The Architect',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     timestamp: 1569109273726,
//     avatar: Mev,
//   },
//   {
//     id: '2',
//     name: 'Code Magician',
//     text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     timestamp: 1569109273726,
//     avatar: Mev,
//   },
//   {
//     id: '3',
//     name: 'Java Scriptor',
//     text: 'Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.',
//     timestamp: 1569109273726,
//     avatar: Mev,
//   },
//   {
//     id: '4',
//     name: 'Axios McAxios',
//     text: 'At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.',
//     timestamp: 1569109273726,
//     avatar: Mev,
//   },
// ];
