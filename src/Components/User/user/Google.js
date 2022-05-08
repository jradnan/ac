import React from 'react'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase.init';
const Google = () => {
    const logingoogle =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
           

          }).catch((error) => {
           
            const errorCode = error.code;

           console.log(errorCode)
            // ...
          });
    }
    return (
        <div className='mt-3'>
            <p>or Continue With Google</p>
            <button onClick={logingoogle} className='btn btn-primary'>Google</button>
        </div>
    )
}

export default Google