
//Firebase Configuration

import firebase from "firebase"
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAE4uzY7Dxj6cknHGY7rURdqPS1cLOIWqI",
    authDomain: "myproject-cb339.firebaseapp.com",
    projectId: "myproject-cb339",
    storageBucket: "myproject-cb339.appspot.com",
    messagingSenderId: "122786287334",
    appId: "1:122786287334:web:a0a770d4fcf649b59af527",
    measurementId: "G-TS8SLJPWXC"
  };

  const app=firebase.initializeApp(firebaseConfig);

export default app.database()