import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBqEZ1wV00q4sgacaLyH5BlFXLrJGxY7N0',
  authDomain: 'referee-web.firebaseapp.com',
  databaseURL: 'https://referee-web.firebaseio.com',
  projectId: 'referee-web',
  storageBucket: 'referee-web.appspot.com',
  messagingSenderId: '397243052698',
  appId: '1:397243052698:web:45a77775e10a1c9a146523'
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("todos")
