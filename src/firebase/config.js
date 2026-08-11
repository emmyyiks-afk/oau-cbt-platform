// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDo0RbJ_ThPBK2GVIEwSfwjJXvxygJIY9Q",
  authDomain: "joas-cbt-app.firebaseapp.com",
  projectId: "joas-cbt-app",
  storageBucket: "joas-cbt-app.firebasestorage.app",
  messagingSenderId: "280156075793",
  appId: "1:280156075793:web:e1152904c7e1e10535feb0"
};

// Primary app — used for normal user/admin login sessions
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 Secondary app — used ONLY for admin creating new user accounts.
// This prevents createUserWithEmailAndPassword from hijacking the admin's
// active session on the primary `auth` instance.
const secondaryApp = initializeApp(firebaseConfig, 'Secondary');
const secondaryAuth = getAuth(secondaryApp);

export {
  auth,
  db,
  secondaryAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs
};