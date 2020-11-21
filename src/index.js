import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
 //there are many other module are there and we are using firestore only so we used this line

const firebaseConfig = {
  apiKey: "AIzaSyCisARZ97lqYeIS8AKtKefpqHF3OIRsUI0",
  authDomain: "cart-c2148.firebaseapp.com",
  databaseURL: "https://cart-c2148.firebaseio.com",
  projectId: "cart-c2148",
  storageBucket: "cart-c2148.appspot.com",
  messagingSenderId: "644195743461",
  appId: "1:644195743461:web:f29e72a4a0d3ce2292c60c"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

