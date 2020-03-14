// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLaS22FbwuDThox6JULkbeA9hWug_WcmA",
    authDomain: "chatapp-bb478.firebaseapp.com",
    databaseURL: "https://chatapp-bb478.firebaseio.com",
    projectId: "chatapp-bb478",
    storageBucket: "chatapp-bb478.appspot.com",
    messagingSenderId: "510454002491",
    appId: "1:510454002491:web:74acccf96b414d3a1b7d1e",
    measurementId: "G-5G2XD3ND3D"
};

firebase.initializeApp(firebaseConfig)

// const db = firebase.firestore()
// 初期化

export default firebase 