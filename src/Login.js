import React from 'react';
import './login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    
  const [{user},dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })).catch(error=>alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png'/>
                <h2>Sign in to WhatsApp</h2>
                <Button onClick={signIn}>Sign in using google</Button>
            </div>
            
        </div>
    )
}

export default Login
