import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDstGKKPh14lyeGDanjktjktxJXZLRA7gw",
  authDomain: "messenger-clone-a5ae9.firebaseapp.com",
  databaseURL: "https://messenger-clone-a5ae9.firebaseio.com",
  projectId: "messenger-clone-a5ae9",
  storageBucket: "messenger-clone-a5ae9.appspot.com",
  messagingSenderId: "851299228574",
  appId: "1:851299228574:web:fb53dd684c10a278aa148f",
  measurementId: "G-ZF6LYKP2GT",
});

const db = firebaseApp.firestore();
export { db };
