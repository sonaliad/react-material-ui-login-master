import React, { useContext, useState, useRef } from 'react';
import axios from 'axios';
import AuthContext from '../../store/auth.context';
// import classes from './Login.module.css';
import { Wrapper } from './Login.styles';

const API_URL = "https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco/";

const Login = () => {
  // const history = useHistory();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    return axios
      .post(API_URL + "login", {
        "email":enteredEmail,
        "password":enteredPassword
      })
      .then(response => {
        console.log(response);
        if (response.data.token) {
          const expirationTime = new Date(
            new Date().getTime() + 360 * 1000
          );
          localStorage.setItem("token", JSON.stringify(response.data));
          authCtx.login(response.data.token, expirationTime.toISOString());
        }
        setIsLoading(false);
        return response.data;
      });
    
  };

  return (
    <Wrapper>
    <section >
      <form onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            placeholder='Enter Your Email' 
            required 
            ref={emailInputRef}
            data-testid="email" 
          />
        </div>
        <div className='control'>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            placeholder="Enter Your Password"
            required
            ref={passwordInputRef}
            data-testid="password"
          />
        </div>
        <div className='actions'>
          {!isLoading && (
            <button>Login</button>
          )}
          {isLoading && <p>Sending request...</p>}
        </div>
      </form>
    </section>
    </Wrapper>
  );
}

export default Login;