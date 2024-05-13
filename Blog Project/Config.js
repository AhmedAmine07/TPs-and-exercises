import firebase from 'firebase/app' // the core part of firebase package
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDdlmmYVqulIxOegf9RtyWH41T8jTwLtFo",
    authDomain: "um6p-blog-ahmed.firebaseapp.com",
    projectId: "um6p-blog-ahmed",
    storageBucket: "um6p-blog-ahmed.appspot.com",
    messagingSenderId: "660581652668",
    appId: "1:660581652668:web:4911b940b3ba3000ac98b9"
  };

// Step 1 : init firebase
// we use the firebaseConfig to init the connection to our firebase backend
firebase.initializeApp(firebaseConfig) 
// Step 2 : Init the firestore service
// If we want to do any communication with the firestore db (eg. add documents)
// we can use projectFirestore variable
const projectFirestore = firebase.firestore()
//Step 3 : Export projectFirestore
// This will enable the use the firebase in different components
export {projectFirestore}