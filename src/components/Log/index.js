import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const Log = ( props ) => {
const [signUpModal, setSignUpModal] = useState(props.signup);
const [loginFormModal, setLoginFormModal] = useState(props.signin);

const handleModals = (e) => {
    if(e.target.id === 'signup') {
        setLoginFormModal(false);
        setSignUpModal(true);
    } else if (e.target.id === 'login') {
        setLoginFormModal(true);
        setSignUpModal(false);
    }
}

    return (
        <div className="connection-form">
            <div className="connection-form__container">
                <ul className="connection-form__container__buttons">
                    <li onClick={handleModals} id='signup' className={signUpModal ? "button__active" : null}> Inscription </li>                    
                    <li onClick={handleModals} id='login' className={loginFormModal ? "button__active" : null}> Connection </li>
                </ul>
                {signUpModal && <SignUpForm />}
                {loginFormModal && <LoginForm />}
            </div>
        </div>
    );
};

export default Log;