import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginWithOther from '../LoginWithOther/LoginWithOther';
import NavBars from '../NavsBars/NavBars';
import { Context } from '../../App';
import * as firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import "firebase/auth";

const SignUp = () => {
    const history = useHistory();
    const{userElement} = useContext(Context);
    const [user, setUser] = userElement;
    console.log(user)
    const onBlur = (e) => {
        let isFieldValid = true;
        var firstName = '';
        var lastName = '';
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
             isFieldValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(e.target.value)
            
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        

    }
    const handleCreate = () => {
        history.push('/login')
    }
    
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email.trim(), user.password)
            .then(response => {
                console.log(response);
            })
            
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            // ...
          });
        }
        e.preventDefault();
    }
    return (
        <div>
            <NavBars></NavBars>
            <div id="form">
                <div style={{ margin: '20px 50px' }}>
                    <h3>Log In</h3>
                    <p>Email : {user.email}</p>
                    <p>password: {user.password}</p>
                    <p>name: {user.name}</p>
                    <form action="" onClick={handleSubmit}>
                        <input type="text"  onBlur={onBlur} name="name1" placeholder="FirstName" required />
                        <input type="text" required onBlur={onBlur} name="name2" placeholder="LastNAme" />
                        <input type="email" required onBlur={onBlur} name="email" placeholder="Your Email " />
                        <input type="password" required onBlur={onBlur} name="password" placeholder="Password" />
                        <input type="password" required onBlur={onBlur} name="confirmPassword" placeholder="Confirm Password" />
                        <input onClick={handleCreate} type="submit" value="Create Account" />
                        <span>Already have an account?</span>
                        
                        <Link style={{ color: '#F9A51A' }} to="/signup/login">Log in</Link>
                    </form>
                </div>
            </div>
            <LoginWithOther></LoginWithOther>
        </div>
    );
};

export default SignUp;