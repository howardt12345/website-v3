// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCWIxXQ7u9VbNQRg21pOwRYd1p5i7I0xCI',
  authDomain: 'portfolio-49b69.firebaseapp.com',
  databaseURL: 'https://portfolio-49b69.firebaseio.com',
  projectId: 'portfolio-49b69',
  storageBucket: 'portfolio-49b69.appspot.com',
  messagingSenderId: '1036625872430',
  appId: '1:1036625872430:web:ce6fbe50f2ac10348e81bf',
  measurementId: 'G-ZF7VQFQ3KD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
