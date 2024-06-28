import firebase from 'firebase/app' // the core part of firebase package
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwMmdLiOxhWLvx8FP5d48pzbqW_QSO7ts",
    authDomain: "js-rat-b3a26.firebaseapp.com",
    projectId: "js-rat-b3a26",
    storageBucket: "js-rat-b3a26.appspot.com",
    messagingSenderId: "648688521802",
    appId: "1:648688521802:web:bbb2e442ba41cb90554cb3"
  };


// Step 1 : init firebase
// we use the firebaseConfig to init the connection to our firebase backend
firebase.initializeApp(firebaseConfig)


// Step 2 : Init the firestore service
// If we want to do any communication with the firestore db (eg. add documents)
// we can use projectFirestore variable
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore()


//Step 3 : Export projectFirestore
// This will enable the use the firebase in different components
export { projectAuth, projectFirestore}