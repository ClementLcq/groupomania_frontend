import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignInForm from './SignInForm';

const Log = ( props ) => {
const [loginpModal, setLoginpModal] = useState(props.signup);
const [signInModal, setSignInModal] = useState(props.signin);

const handleModals = (e) => {
    if(e.target.id === 'signup') {
        setSignInModal(false);
        setLoginpModal(true);
    } else if (e.target.id === 'login') {
        setSignInModal(true);
        setLoginpModal(false);
    }
}

    return (
        <div className="connection-form">
            <div className="connection-form__container">
                <ul className="connection-form__container__buttons">
                    <li onClick={handleModals} id='signup' className={loginpModal ? "button__active" : null}> Inscription </li>                    
                    <li onClick={handleModals} id='login' className={signInModal ? "button__active" : null}> Connection </li>
                </ul>
                {loginpModal && <LoginForm />}
                {signInModal && <SignInForm />}
            </div>
        </div>
    );
};

export default Log;