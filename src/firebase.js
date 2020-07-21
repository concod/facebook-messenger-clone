import firebase from "firebase";

const firbaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTOMkjb2nrvTRyM5dY_z9xNNQSEBmV17c",
  authDomain: "fbmsg20.firebaseapp.com",
  databaseURL: "https://fbmsg20.firebaseio.com",
  projectId: "fbmsg20",
  storageBucket: "fbmsg20.appspot.com",
  messagingSenderId: "171117962813",
  appId: "1:171117962813:web:c6f577cbd2ab109c3d6c54",
  measurementId: "G-9KZF27XEMJ",
});
const db = firebase.firestore();

export default db;
