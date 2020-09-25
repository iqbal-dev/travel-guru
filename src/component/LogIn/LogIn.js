import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginWithOther from '../LoginWithOther/LoginWithOther';
import NavBar from '../Nav/NavBar';
import NavBars from '../NavsBars/NavBars';
import './LogIn.css';
import * as firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import "firebase/auth";
import { Context } from '../../App';

const LogIn = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    const{ userElement } = useContext(Context); 
    const [user, setUser] = userElement;
    
    console.log(user)
    const handleLogIn = (e) => {
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
            console.log(res)
            const newUserInfo = { ...user };
            newUserInfo.error = "";
            setUser(newUserInfo);
            history.replace(from)
            console.log('user created')
        })
        .catch(error=> {
        // Handle Errors here.
            var errorMessage = error.message;
            console.log(errorMessage)
        const newError = { ...user };
          newError.error = errorMessage;
          newError.success = '';
        setUser(newError);
        // ...
      });
        }
      e.preventDefault();
    }
    return (
        <div style={{ align: 'center' }}>
            <NavBars></NavBars>
            <div id="form">
                <div style={{ margin: '20px 50px' }}>
                    <h3>Log In</h3>
                    <form onSubmit={handleLogIn}>
                        
                        <input type="email" name="email"  id="" placeholder="Username or Email" />
                        <input type="password" name="password" id="" placeholder="password"/>
                          
                        <input  type="submit" value="Log In" />
                            <span>Don't have an Account? </span>
                            <Link style={{ color: '#F9A51A' }} to="/create">Create a new account</Link>
                    </form>
                </div>
            </div>
        <LoginWithOther></LoginWithOther>
        </div>
    );
};

export default LogIn;