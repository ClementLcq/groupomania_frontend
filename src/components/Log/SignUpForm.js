import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const terms = document.getElementById('terms');
        const emailError = document.querySelector('.email__error');
        const passwordError = document.querySelector('.password__error');
        const termsError = document.querySelector('.terms__error');

        termsError.innerHTML = "";

        if (!terms.checked) {
            termsError.innerHTML = "Veuillez acceptez nos conditions générales";
          } else {
            await axios ({
                method: 'POST',
                url:'http://localhost:3001/api/auth/signup',
                withCredentials: true,
                data: {
                    email,
                    password
                }
            })
            .then ( (res) => {
                console.log(res);
                if(res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                  setFormSubmit(true);  
                }
            })
            .catch((err) => console.log(err));
          }
        
    }

    return (
        <>
        {formSubmit ? (
            <>
            <SignUpForm />
            <span></span>
            <h4 className='success'>Enregistrement réussi, veuillez vous connecter</h4>
            </>
        ) : (
            <form action="" onSubmit={handleRegister} id="sign-up-form">
                <label htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <div className="email__error"></div>
                <br />
                <label htmlFor="password">Mot de passe</label>
                <br />
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <div className="password__error"></div>
                <br />
                <input type="checkbox" id="terms"/>
                <label htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">conditions générales</a></label>
                <div className="terms__error"></div>
                <br />
                <input type="submit" value="Valider l'inscription" className='form__submit'/>
            </form>
        )}
        </>
    );
};

export default SignUpForm;