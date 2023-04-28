import { StyleSheet } from 'react-native';

const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingPage: {
    flex: 3,
    gap: 20,
    height: '100%',
    backgroundColor: '#f7ecde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 20,
  },
  StatusBar: {
    StatusBarStyle: 'auto',
  },
  button: {
    backgroundColor: '#54bab9',
    borderRadius: 5,
    height: 50,
    width: 180,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 25,
  },
  loginField: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 180,
    fontSize: 18,
  },
  signUpField: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    fontSize: 18,
    width: 225,
    height: 30,
    paddingLeft: 10,
  },
  filters: {
    backgroundColor: 'lightgray',
  },
  postContainer: {
    flex: 1,
    flexDirection: 'column',
    // borderBottomWidth: 2,
    // borderBottomColor: '#E9DAC1',
    // borderTopWidth: 2,
    // borderTopColor: '#E9DAC1',
  },
  postHeader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  postFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
  },
  postCategory: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: '#E9DAC1',
    paddingBottom: 5,

    // paddingTop: 5,
  },

  postBody: {
    width: '92%',
    paddingBottom: 15,
  },
  postTitle: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#1d1d1f',
    fontSize: 23,
    fontWeight: 500,
    // fontSize: 20,
    // fontWeight: 'bold',
    // paddingBottom: 10,
    width: '78%',
  },
  tag: {
    fontSize: 10,
    color: '#54bab9',
    fontWeight: 600,
  },
  postTags: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  postCommentLikes: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
});

export default sharedStyles;
