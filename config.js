import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBcFbM8DalZCFGRLZaK2KXhaqrE7zpdmGk",
    authDomain: "bicycle-app-93812.firebaseapp.com",
    projectId: "bicycle-app-93812",
    storageBucket: "bicycle-app-93812.appspot.com",
    messagingSenderId: "854559007091",
    appId: "1:854559007091:web:b7280155d834425d4f6506"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();