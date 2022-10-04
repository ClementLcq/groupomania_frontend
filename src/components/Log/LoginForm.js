import React, { useState} from 'react';
import axios from 'axios';
// import { Formik } from 'formik';
// import * as Yup from "yup";
// import env from 'react-dotenv';


// const LoginForm = () => {

//     const handleLogin = (
//         { email, password },
//         { setFieldError }
//     ) => {
//         email.preventDefault();
//         password.preventDefault();
//         setFieldError.preventDefault();

//         axios({
//             method:"post",
//             url:'http://localhost:3001/api/auth/login',
//             data: {
//                 email,
//                 password,
//             }
//         })
//         .then((res) => {
//             console.log(res);
//             window.localStorage.setItem("token", res.data.token);
//             window.localStorage.setItem("userEmail", JSON.stringify(res.data.userEmail));
//             window.localStorage.setItem("userId", JSON.stringify(res.data.userId));


//             // Enregistrer token dans LS
//             window.location = "/trending";
//             }
        
//         )
//         .catch((err) => console.log(err));
//     };

//     const validationLogin = Yup.object().shape({
//         email: Yup.string()
//             .email("La paire adresse email / mot de passe est incorrecte")
//             .required("L'adresse email est requise"),
//         password: Yup.string()
//             .matches("La paire adresse email / mot de passe est incorrecte")            
//             .required("Le mot de passe est requis"),

//     });
    
    
//     return (
//         <>
//         <section>
//         <Formik
//                 initialValues={{
//                     email: "",
//                     password: "",
//                 }}
//                 onSubmit={(values, errors) => {
//                     handleLogin(values, errors);
//                 }}
//                 validationLogin={validationLogin}
//             >
//                 {({
//                     values,
//                     errors,
//                     handleLogin,
//                     handleChange,
//                 }) => {
//                     return(
//                         <form action="" onSubmit={handleLogin} id="sign-up-form">
//                             <label htmlFor="email">Email</label>
//                             <input type="text" name="email" id="email" onChange={handleChange("email")} value={values.email} />
//                             <span className="error_login">{errors.email}</span>
//                             <br/>
//                             <label htmlFor="password">Mot de passe</label>
//                             <input type="password" name="password" id="password" onChange={handleChange("password")} value={values.password} />
//                             <br/>
//                             <span className="error_login">{errors.password}</span>
//                             <br />
//                             <input className="form__submit" type="submit" value="Se connecter"/>
//                         </form>
//                     )}
//             }   
//             </Formik>
//         </section>  
//         </>
//     );
// };

// export default LoginForm;


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
