// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFg97m1SboSHACAhwHFo8TxAJMDNq4iJ8",
  authDomain: "cosmos-connect-a647f.firebaseapp.com",
  projectId: "cosmos-connect-a647f",
  storageBucket: "cosmos-connect-a647f.appspot.com",
  messagingSenderId: "940773929495",
  appId: "1:940773929495:web:b70ab7599c9d80ad37e252",
  measurementId: "G-NBHYYF942G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);