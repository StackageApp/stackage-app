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
    borderBottomWidth: 2,
    borderBottomColor: '#E9DAC1',
  },
  postHeader: {
    flex: 1,
  },
});

export default sharedStyles;
