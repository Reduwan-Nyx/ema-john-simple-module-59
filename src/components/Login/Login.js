import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const neviagte= useNavigate();

    const handleEmailBlur= event =>{
        setEmail(event.target.value)
        
        
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }

    const handleUserSignIn = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
    }

    if(user){
        neviagte('/shop')
    }


    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>login</h2>
            <form onSubmit={handleUserSignIn}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" id='' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">password</label>
                <input onBlur={handlePasswordBlur} type="password" name='password' id='' required/>
            </div>
           
            <p style={{color:'red'}}>{error?.message}</p>
            {
                loading && <p>Loading...</p>
            }
            <input className='form-submit' type="submit" value="Login" />
            </form>
            <p className='para-title'>
                NEW TO EMA-JOHN? <Link className='form-link' to="/signup">Create A New Account</Link>
            </p>

            </div>
        </div>
    );
};

export default Login;