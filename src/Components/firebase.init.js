// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain,
//     projectId:process.env.REACT_APP_projectId,
//     storageBucket:process.env.REACT_APP_storageBucket,
//     messagingSenderId:process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId
// };

// not Working env file
const firebaseConfig = {
    apiKey: "AIzaSyCJxqdhM8e1zT7VdwZNJ3555IfwDZN7X18",
    authDomain: "inventory-managment-b4771.firebaseapp.com",
    projectId: "inventory-managment-b4771",
    storageBucket: "inventory-managment-b4771.appspot.com",
    messagingSenderId: "707950054957",
    appId: "1:707950054957:web:6d52c43f9b7857ac91b2a4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth