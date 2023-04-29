// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC8cs2mCt6hUzUuLi5klg3rHKYEHAtzThM',
  authDomain: 'stackage-a022a.firebaseapp.com',
  projectId: 'stackage-a022a',
  storageBucket: 'stackage-a022a.appspot.com',
  messagingSenderId: '460753764841',
  appId: '1:460753764841:web:b2bd079d31d51d31dc0b78',
  measurementId: 'G-Q25VCYP0D7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const authenticateNewUserFB = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password).catch((err) => console.log(err));

export const signInFB = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signOutFB = () =>
  signOut(auth).catch((err) => {
    console.log('could not sign out', err);
  });
