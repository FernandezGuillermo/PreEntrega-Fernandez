import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcFQoql4EUPoHRcv6HGTwrqve4Dgvczhg",
  authDomain: "polo-club-esperanza.firebaseapp.com",
  projectId: "polo-club-esperanza",
  storageBucket: "polo-club-esperanza.appspot.com",
  messagingSenderId: "257851680973",
  appId: "1:257851680973:web:c9ba2a7c9211a3d4f02184"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


