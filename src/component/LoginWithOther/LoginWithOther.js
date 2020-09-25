import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./LoginWithOther.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

const LoginWithOther = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(provider)
            .then( (result) => {
                var user = result.user;
                history.replace(from);
            console.log('successfully logged')
          }).catch(function(error) {
              var errorMessage = error.message;
              console.log(errorMessage);
          });
    }
    const handleFacebookLogin = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then( (result) => {
            var user = result.user;
            console.log(user)
          }).catch(function(error) {
              var errorMessage = error.message;
              console.log(errorMessage);
          });
    }
    return (
        <div>
            <div className="loginWithSocial">
                <p> <i></i> or <i></i></p>
                <button onClick={handleFacebookLogin}><FontAwesomeIcon icon={faFacebook} style={{fontSize:'20px',color:'blue'}}></FontAwesomeIcon> <span style={{marginLeft:'100px',marginRight:'150px'}}>Continue With Facebook</span></button>
                <button onClick={handleGoogleLogin} ><FontAwesomeIcon icon={faGoogle} style={{fontSize:'20px',color:'blue'}}></FontAwesomeIcon> <span style={{marginLeft:'100px',marginRight:'150px'}}>Continue With Google</span></button>
            </div> 
        </div>
    );
};

export default LoginWithOther;