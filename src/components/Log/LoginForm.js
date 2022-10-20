import React, { useState} from 'react';
import axios from 'axios';
// import { Formik } from 'formik';
// import * as Yup from "yup";
// import env from 'react-dotenv';

const LoginForm = () => {
        const [email, setEmail ] = useState('');
        const [password, setPassword] = useState('');
    
        // const [emailError, setEmailError] = useState('');
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
                window.localStorage.setItem("userEmail", JSON.stringify(res.data.userEmail));
                window.localStorage.setItem("userId", JSON.stringify(res.data.userId));
                window.localStorage.setItem("isAdmin", res.data.isAdmin);
    
    
                // Enregistrer token dans LS
                window.location = "/trending";
                }
            
            )
            .catch((err) => {
                if (err.response.data) {
                    setPasswordError(err.response.data.message) ;
                }
                console.log(err);
            })
        };
        
        
        return (
            <form action="" onSubmit={handleLogin} id="sign-up-form">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <br/>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <br/>
                {passwordError && <span className="form__errors">{passwordError}</span>}
                <br />
                <input className="form__submit" type="submit" value="Se connecter"/>
            </form>
        );
    };

    export default LoginForm;
