// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore, serverTimestamp } from "firebase/firestore";
//import { getStorage } from "firebase/storage";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAheYKfl3_YCw9jcuu4y_TFZKmzsSDNwQs",
  authDomain: "squirrel-spotter.firebaseapp.com",
  projectId: "squirrel-spotter",
  storageBucket: "squirrel-spotter.appspot.com",
  messagingSenderId: "599416252764",
  appId: "1:599416252764:web:6769d47b2885749afcb999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app)

//export {firestore, storage, serverTimestamp};
export { storage , firestore};