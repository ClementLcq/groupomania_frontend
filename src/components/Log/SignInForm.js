import React, { useState} from 'react';
import axios from 'axios';
// import env from 'react-dotenv';


const SignInForm = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

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
            window.localStorage.setItem("token", res.data.token);
            // Enregistrer token dans LS
            window.location = "/trending";
            }
        
        )
        .catch((err) => {
            if (err.data.errors) {
                setEmailError(err.data.errors.email) ;
                setPasswordError(err.data.errors.password) ;
            }
            console.log(err);
        })
    };
    
    
    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            {emailError && <span className="error">{emailError}</span>}
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <br/>
            {passwordError && <span className="error">{passwordError}</span>}
            <br />
            <input className="form__submit" type="submit" value="Se connecter"/>
        </form>
    );
};

export default SignInForm;