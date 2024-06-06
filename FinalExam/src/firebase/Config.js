import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, getDoc, setDoc, addDoc, updateDoc, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFMhvragH8DTkJ8Awl38b8ysiApCDn_5g",
  authDomain: "final-j.firebaseapp.com",
  projectId: "final-j",
  storageBucket: "final-j.appspot.com",
  messagingSenderId: "188146826801",
  appId: "1:188146826801:web:02867f6c42426a79c95f10"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const projectFirestore = getFirestore(firebaseApp);
const projectAuth = getAuth(firebaseApp);

export { projectAuth, projectFirestore, collection, doc, getDocs, getDoc, setDoc, addDoc, updateDoc, query, where };
