import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from "yup";


const LoginForm = () => {
    
    const handleSubmit = async (
        { email, password, acceptTOS },
        { setFieldError }
    ) => {
        console.log("Success! Call the API Now!");

        await axios ({
            method: 'POST',
            url:'http://localhost:3001/api/auth/signup',
            data: {
                email,
                password
            }
        })
        .then ( (res) => {
            console.log(res);
            setFormSubmit(true);  
            
        })
        .catch((err) => console.log(err));

        setTimeout(() => {
            setFieldError("email", "Cet email est déjà utilisé");
        }, 1000);
    };

    const [formSubmit, setFormSubmit] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Veuillez entrer une adresse email valide")
            .required("L'adresse email est requise"),
        password: Yup.string()
            .required("Le mot de passe est requis")
            .min(8, "Le mot de passe est trop petit, vous devez avoir au moins 6 caractères")
            .max(16, "Le mot de passe est trop long, vous devez avoir un maximum de 16 caractères")
            .uppercase(true, "Le mot de passe doit contenir au moins une majuscule")
            .lowercase(true, "Le mot de passe doit contenir au moins une miniscule"),
        acceptTOS: Yup.bool().oneOf(
            [true],
            "Vous devez accepter nos conditions générales"
        ),
    });

    return (
        <>
        <section>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    acceptTOS: false,
                }}
                onSubmit={(values, errors) => {
                    handleSubmit(values, errors);
                }}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                }) => {
                    return (
                        <>
                        {formSubmit ? (
                            <>
                            {/* <SignInForm /> */}
                            <span></span>
                            <h4 className='success'>Super, votre compte a été créé.<br/> Rendez-vous sur l'onglet connection pour accéder au contenu de notre réseau.</h4>
                            </>
                        ) : (
                            <form action="" onSubmit={handleSubmit} id="sign-up-form">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" onChange={handleChange("email")}  onBlur={handleBlur("email")} value={values.email}/>
                                <div className="email__error">{touched.email && errors.email}</div>
                                <br />
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password" name="password" id="password" onChange={handleChange("password")} onBlur={handleBlur("password")} value={values.password}/>
                                <div className="password__error">{touched.password && errors.password}</div>
                                <br />
                                <div className="form__terms">
                                    <input type="checkbox" id="terms" checked={values.acceptTOS} onChange={handleChange("acceptTOS")}/>
                                    <label htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">conditions générales</a></label>
                                </div>
                                <div className="terms__error">{touched.acceptTOS && errors.acceptTOS}</div>
                                <br />
                                <input type="submit" value="Valider l'inscription" className='form__submit'/>
                            </form>
                        )}
                        </>
                    );
                }}
            </Formik>
        </section>
        </>
    );
};

export default LoginForm;



// const SignUpForm = () => {
    // const [formSubmit, setFormSubmit] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         const terms = document.getElementById('terms');
//         const emailError = document.querySelector('.email__error');
//         const passwordError = document.querySelector('.password__error');
//         const termsError = document.querySelector('.terms__error');

//         termsError.innerHTML = "";

//         if (!terms.checked) {
//             termsError.innerHTML = "Veuillez acceptez nos conditions générales";
//           } else {
            // await axios ({
            //     method: 'POST',
            //     url:'http://localhost:3001/api/auth/signup',
            //     data: {
            //         email,
            //         password
            //     }
            // })
            // .then ( (res) => {
            //     console.log(res);
            //     if(res.data.errors) {
            //         emailError.innerHTML = res.data.errors.email;
            //         passwordError.innerHTML = res.data.errors.password;
            //     } else {
            //       setFormSubmit(true);  
            //     }
            // })
            // .catch((err) => console.log(err));
//           }
        
//     }

    // return (
    //     <>
    //     {formSubmit ? (
    //         <>
    //         {/* <SignInForm /> */}
    //         <span></span>
    //         <h4 className='success'>Super, votre compte a été créé.<br/> Rendez-vous sur l'onglet connection pour accéder au contenu de notre réseau.</h4>
    //         </>
    //     ) : (
    //         <form action="" onSubmit={handleRegister} id="sign-up-form">
    //             <label htmlFor="email">Email</label>
    //             <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
    //             <div className="email__error"></div>
    //             <br />
    //             <label htmlFor="password">Mot de passe</label>
    //             <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
    //             <div className="password__error"></div>
    //             <br />
    //             <div className="form__terms">
    //                 <input type="checkbox" id="terms" checked={false} onChange={() => console.log("On checkbox change handler")}/>
    //                 <label htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">conditions générales</a></label>
    //             </div>
    //             <div className="terms__error"></div>
    //             <br />
    //             <input type="submit" value="Valider l'inscription" className='form__submit'/>
    //         </form>
    //     )}
    //     </>
    // );
// };

// export default SignUpForm;