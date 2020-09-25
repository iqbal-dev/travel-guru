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
    const handleSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(user.email.trim(), user.password)
            .then(() => {
                console.log('successfully logged');
                history.replace(from);
            })
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage,errorCode)
            // ...
        });
    }
    const handleLogIn = () => {
        history.push('/hotel')
    }
    return (
        <div style={{ align: 'center' }}>
            <NavBars></NavBars>
            <div id="form">
                <div style={{ margin: '20px 50px' }}>
                    <h3>Log In</h3>
                    <form action="" onClick= {handleSubmit}>
                        
                        <input type="text" name="" id="" placeholder="Username or Email" />
                        <input type="password" name="" id="" placeholder="password"/>
                            <div className="row" >
                                <div className="col-md-6">
                                <input type="checkbox"className="checkBox" name="" id="remember" />
                                <label htmlFor="remember"> Remember Me</label>  
                                </div>
                                <div className="col-md-6" style={{marginTop:'20px'}}>
                                <Link to ="forget" style={{color:'#F9A51A'}}>Forget Password</Link>
                                </div>
                            </div>  
                        <input onClick={handleLogIn} type="button" value="Log In" />
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