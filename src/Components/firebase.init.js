// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyATf0DdjRg2t5wUKUlPvLBP7zFJ3MT7hsc",
    authDomain: "assignment10-93a26.firebaseapp.com",
    projectId: "assignment10-93a26",
    storageBucket: "assignment10-93a26.appspot.com",
    messagingSenderId: "8942701342",
    appId: "1:8942701342:web:4b92a459dc5caab8a3570f"
  };
  


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth