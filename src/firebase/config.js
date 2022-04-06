import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6qhC9Do-EfBMCbmbrqe5OAXZCCaCE1g",
  authDomain: "treehouse-website.firebaseapp.com",
  projectId: "treehouse-website",
  storageBucket: "treehouse-website.appspot.com",
  messagingSenderId: "235859705695",
  appId: "1:235859705695:web:804d798573392abce2c0ea",
  measurementId: "G-E6QM0G0V85",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, provider, storage };
export default { db };
