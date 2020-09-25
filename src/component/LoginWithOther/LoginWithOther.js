import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./LoginWithOther.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { Context } from '../../App';

const LoginWithOther = () => {
    const { userElement } = useContext(Context);
    const [user, setUser] = userElement;
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
            const { displayName,email } = result.user;
            const signedInUser = { name: displayName,email };
            setUser(signedInUser);
                history.replace(from);
          }).catch(function(error) {
              var errorMessage = error.message;
              console.log(errorMessage);
          });
    }
    const handleFacebookLogin = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then((result) => {
                console.log(result.user)
                    history.replace(from);
          }).catch(function(error) {
              var errorMessage = error.message;
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