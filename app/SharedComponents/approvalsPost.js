import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { LinkPreview } from '@flyerhq/react-native-link-preview';
import { Link } from 'expo-router';

import { dummyApprovalsPost } from '../Utils/mockApprovalsPosts';
import { postApi } from '../api';

export default function ApprovalPost({ postData }) {
  const [
    { title, text, name, category, tags, links, likes, comments, userAvatar, id, uid },
    setPost,
  ] = useState(dummyApprovalsPost);
  const [tagsExist, setTagsExist] = useState(false);
  const [commentsExist, setCommentsExist] = useState(false);
  const [commentView, setCommentView] = useState(false);
  const [approveButton, setApproveButton] = useState(false);
  const [disapproveButton, setDisapproveButton] = useState(false);
  const [linksExist, setLinksExist] = useState(false);

  useEffect(() => {
    if (tags) {
      setTagsExist(true);
    }
    if (comments) {
      setCommentsExist(true);
    }
    if (links) {
      setLinksExist(true);
    }
  }, [tags, comments, links]);

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
    <View style={style.postContainer}>
      <View style={style.categoryContainer}>
        <View style={style.categoryStyle}>
          <Text style={style.category}>{category}</Text>
        </View>
      </View>
      <View style={style.postHeader}>
        <Image style={style.avatar} source={userAvatar} />
        <View style={style.postTitleContainer}>
          <Text style={style.postTitle}>{title}</Text>
          <Text style={style.userName}>posted by {name}</Text>
        </View>
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>{text}</Text>
        {linksExist &&
          links.map((link, i) =>
            i === links.length - 1 ? (
              <LinkPreview
                key={i}
                text={link}
                containerStyle={style.linkPreviewContainerFull}
                metadataContainerStyle={style.linkPreviewContainer}
                imageContainerStyle={style.linkPreviewContainerText}
              />
            ) : (
              <LinkPreview
                key={i}
                text={link}
                containerStyle={style.linkPreviewContainerFull}
                metadataContainerStyle={style.linkPreviewContainer}
                imageContainerStyle={style.linkPreviewContainerText}
              />
            )
          )}

        {/* <Text style={style.link}>{link}</Text> */}
      </View>
      <View style={style.metaContainer}>
        {tagsExist &&
          tags.map((tag, i) =>
            i === tags.length - 1 ? (
              <Text style={style.tags} key={i}>
                #{tag}{' '}
              </Text>
            ) : (
              <Text style={style.tags} key={i}>
                #{tag}{' '}
              </Text>
            )
          )}
      </View>
      <View style={style.voteContainer}>
        <View style={[style.vote, approveButton ? style.yesVote : style.vote]}>
          <Pressable
            onPress={() => {
              postApi.incrementLikeBy1(uid);
              if (disapproveButton) {
                setDisapproveButton(!disapproveButton);
              }
              setApproveButton(!approveButton);
            }}
          >
            <Text style={style.textVote}>Approve</Text>
          </Pressable>
        </View>
        <View style={[style.vote, disapproveButton ? style.yesVote : style.vote]}>
          <Pressable
            onPress={() => {
              postApi.incrementLikeBy1(id);
              if (approveButton) {
                setApproveButton(!approveButton);
              }
              setDisapproveButton(!disapproveButton);
            }}
          >
            <Text style={style.textVote}>Disapprove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  postContainer: {
    flex: 1,

    marginVertical: 4,
    paddingLeft: 10,
    paddingRight: 0,
    paddingBottom: 10,
    borderTopWidth: 2.5,
    borderTopColor: '#e9dac1',
    // borderBottomColor: '#e9dac1',
    // borderBottomWidth: 1.5,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingRight: 0,
    marginRight: 0,
    justifyContent: 'flex-end',
  },
  categoryStyle: {
    backgroundColor: '#e9dac1',
    borderBottomLeftRadius: 25,

    overflow: 'hidden',
  },
  category: {
    backgroundColor: '#e9dac1',
    padding: 2,
    marginLeft: 15,
    marginRight: 5,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',
    fontSize: 10,
    color: '#54bab9',
    fontWeight: 600,
  },
  postHeader: {
    flexDirection: 'row',
  },
  postTitleContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    borderColor: '#9ed2c6',
    borderWidth: 1.5,
  },
  postTitle: {
    fontSize: 23,
    fontWeight: 500,
    color: '#1d1d1f',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userName: {
    color: '#54bab9',
    fontWeight: 600,
    fontSize: 12,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 57,
    paddingRight: 15,
    borderRadius: 40,
    color: '#1d1d1f',
  },
  text: {
    padding: 10,
    borderRadius: 40,
  },
  link: {
    padding: 10,
    borderRadius: 40,
    color: '#9C50B6',
    fontSize: 10,
  },

  linkPreviewContainer: {
    flex: 1,

    fontSize: 10,
  },

  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-apart',
    paddingLeft: 69,
  },
  tags: {
    flexDirection: 'row',
    fontSize: 10,
    color: '#9ed2c6',
    fontWeight: 600,
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  vote: {
    borderWidth: 1,
    borderColor: '#e9dac1',
    paddingHorizontal: 15,
    paddingVertical: 9,

    borderRadius: 5,
    marginHorizontal: 5,
  },
  yesVote: {
    borderWidth: 1,
    borderColor: '#e9dac1',
    paddingHorizontal: 15,
    paddingVertical: 9,
    backgroundColor: '#e9dac1',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textVote: {
    fontSize: 10,
    color: '#54bab9',

    fontWeight: 600,
  },
});

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
