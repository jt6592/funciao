import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyA7Vjpz_zXH-kW29qFr0Kj8heavmkJZpFU",
  authDomain: "react-map-56c4d.firebaseapp.com",
  databaseURL: "https://react-map-56c4d-default-rtdb.firebaseio.com",
  projectId: "react-map-56c4d",
  storageBucket: "react-map-56c4d.appspot.com",
  messagingSenderId: "22153245250",
  appId: "1:22153245250:web:726269d39e60ca6d6c33db",
  measurementId: "G-L2RW1QW4FW"
};

firebase.initializeApp(config);

export default firebase.firestore();
