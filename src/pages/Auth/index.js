import { useState } from "react";
import React from "react";
import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm/";

const AuthPage = ({ setUser }) => {
 const [authForm, setAuthForm] = useState(false)
 const handleFormDisplay = () => {
  setAuthForm(prevState => !prevState)
 }
  return (
    <>
      <h1>AuthPage</h1>
      <button onClick={handleFormDisplay}>{ authForm ? 'Sign Up' : 'Log In'}</button>
      { !authForm && <SignUpForm setUser={setUser} />}
      { authForm && <LoginForm setUser={setUser}/>}
    </>
  );
};

export default AuthPage;
