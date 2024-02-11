// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwO-qOsE-aav2z6eHrHbmbOG_UYLUiUMY",
  authDomain: "ticare-c6d15.firebaseapp.com",
  databaseURL: "https://ticare-c6d15-default-rtdb.firebaseio.com/",
  projectId: "ticare-c6d15",
  storageBucket: "ticare-c6d15.appspot.com",
  messagingSenderId: "407637126371",
  appId: "1:407637126371:web:0cb991c49d43cbc18869d6",
  measurementId: "G-Y30NJ1VN8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
