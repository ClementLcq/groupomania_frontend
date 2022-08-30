import React, { useState} from 'react';
import axios from 'axios';
// import env from 'react-dotenv';


const SignInForm = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email__error');
        const passwordError = document.querySelector('.password__error');

        axios({
            method:"post",
            url:'http://localhost:3001/api/auth/login',
            data: {
                email,
                password,
            }
        })
        .then((res) => {
            console.log(res);
            if (res.data.errors) {
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
            } else {
                window.location = "/trending";
            }
        }
        )
        .catch((err) => {
            console.log(err);
        })
    };
    
    
    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <br/>
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <div className="email__error"></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <br/>
            <div className="password__error"></div>
            <input className="form__submit" type="submit" value="Se connecter"/>
        </form>
    );
};

export default SignInForm;