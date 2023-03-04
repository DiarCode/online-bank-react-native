import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWs5Z3lOFzXMbdFNvt_HVNnAt5CNw8v6s",
  authDomain: "tinkoff-app-rn.firebaseapp.com",
  projectId: "tinkoff-app-rn",
  storageBucket: "tinkoff-app-rn.appspot.com",
  messagingSenderId: "105867248597",
  appId: "1:105867248597:web:aaa509016796c99c89b35c",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth();

export const firebaseDB = getFirestore();

export const FIREBASE_COLLECTIONS = {
  users: "users",
  stories: "stories",
  cards: "cards",
};
