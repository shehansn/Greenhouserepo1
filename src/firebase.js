import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAkBgERmDNcsIk2QplnJcTjlGnhlA874aI",
    authDomain: "fir-crud-new-7908b.firebaseapp.com",
    databaseURL: "https://fir-crud-new-7908b-default-rtdb.firebaseio.com",
    projectId: "fir-crud-new-7908b",
    storageBucket: "fir-crud-new-7908b.appspot.com",
    messagingSenderId: "91402106127",
    appId: "1:91402106127:web:4eb42cc9e34522239f7a7a",
    measurementId: "G-WL4ZV28R3V"
  };
  
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();