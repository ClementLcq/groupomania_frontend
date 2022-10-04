import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignInForm from './SignInForm';

const Log = ( props ) => {
const [signUpModal, setSignUpModal] = useState(props.signup);
const [signInModal, setSignInModal] = useState(props.signin);

const handleModals = (e) => {
    if(e.target.id === 'signup') {
        setSignInModal(false);
        setSignUpModal(true);
    } else if (e.target.id === 'login') {
        setSignInModal(true);
        setSignUpModal(false);
    }
}

    return (
        <div className="connection-form">
            <div className="connection-form__container">
                <ul className="connection-form__container__buttons">
                    <li onClick={handleModals} id='signup' className={signUpModal ? "button__active" : null}> Inscription </li>                    
                    <li onClick={handleModals} id='login' className={signInModal ? "button__active" : null}> Connection </li>
                </ul>
                {signUpModal && <LoginForm />}
                {signInModal && <SignInForm />}
            </div>
        </div>
    );
};

export default Log;