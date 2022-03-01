import React, { useState } from "react";
import "../CSS/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //on change fuction for handle the change in input for both email and password
  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const onChangePassword = (e)=>{
      setPassword(e.target.value)
  }

//    for click on signin
const signIn = (e)=>{
    e.preventDefault();
    
    // do some fire base login stuff
}

//    for click on Register
const register = (e)=>{
    e.preventDefault()
  // do some fire base register stuff
    
}


  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" name="email" value={email} onChange={onChangeEmail} />
          <h5>Password</h5>
          <input type="password" name="password" value={password} onChange={onChangePassword}/>
          <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
          <p>
            By continuing, you agree to AMAZON FAKE CLONE- By HARSH 's 1
            Conditions of Use and Privacy Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
