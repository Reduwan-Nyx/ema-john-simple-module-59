import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
const neviagte = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if(user){
      neviagte('/shop')
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
        setError('Your Two Password Did Not Match')
        return;
    }
    if(password.length < 6){
        setError(' password must be 6 character or longer')
        return
    }

    createUserWithEmailAndPassword(email,password)
    
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">SignUp</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">confirm password</label>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirm-password"
                id=""
                required
              />
            </div>
            <p style={{color:'red'}}>{error }</p>
           

            <input className="form-submit" type="submit" value="Signup" />
          </form>
          <p className="para-title">
            Already Have An Account?{" "}
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
