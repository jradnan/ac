import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../firebase.init'
import './Style.css'
const Login = () => {
  const [error , setError] = useState()

  const sigin = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const notify = () => toast("Loged In");
        notify()
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode)
      });
    
  }

  return (
    <div className='container'>
      <div className="login-page">
        <h1 className='text-center my-5 pt-5'>Login</h1>

        <form onSubmit={sigin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input name='email' type="email" className="form-control" placeholder="Email" required />
          </div>

          <div className="my-3">
            <label className="form-label">Password</label>
            <input name='password' type="password" className="form-control" placeholder="Password" required />
          </div>
          <p className='text-danger'>{error}</p>
          <button className='button-primary mt-3' type='submit'>Login</button>

        </form>

        <h5 className='d-flex align-items-center justify-content-around mt-4'>
          Not a mamber
          <Link className='reg-button' to='/register'>Register</Link></h5>
      </div>
    </div>
  )
}

export default Login