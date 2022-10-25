import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from "yup";


const SignUpForm = () => {
    
    const handleSubmit = async (
        { email, password },
        { setFieldError }
    ) => {
        console.log("Success! Call the API Now!");

        await axios ({
            method: 'POST',
            url:`${process.env.REACT_APP_API_URL}/api/auth/signup`,
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
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#=%&])");

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Veuillez entrer une adresse email valide")
            .required("L'adresse email est requise"),
        password: Yup.string()
            .required("Le mot de passe est requis")
            .min(8, "Le mot de passe est trop petit, vous devez avoir au moins 8 caractères")
            .max(22, "Le mot de passe est trop long, vous devez avoir un maximum de 22 caractères")
            .matches(strongRegex, "Votre mot de passe doit contenir au moins un chiffre, une minuscule, une majuscule et un caractère spécial"),
        acceptTOS: Yup.bool().oneOf(
            [true],
            "Vous devez accepter nos conditions générales"
        ),
    });

    return (
        <>
        <section className='connection-form__container__section'>
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
                            <span></span>
                            <h4 className='success'>Super, votre compte a été créé.<br/> Rendez-vous sur l'onglet connection pour accéder au contenu de notre réseau.</h4>
                            </>
                        ) : (
                            <form action="" onSubmit={handleSubmit} id="sign-up-form">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" onChange={handleChange("email")}  onBlur={handleBlur("email")} value={values.email}/>
                                <div className="form__errors">{touched.email && errors.email}</div>
                                <br />
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password" name="password" id="password" onChange={handleChange("password")} onBlur={handleBlur("password")} value={values.password}/>
                                <div className="form__errors">{touched.password && errors.password}</div>
                                <br />
                                <div className="form__terms">
                                    <input type="checkbox" id="terms" checked={values.acceptTOS} onChange={handleChange("acceptTOS")}/>
                                    <label htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">conditions générales</a></label>
                                </div>
                                <div className="form__errors">{touched.acceptTOS && errors.acceptTOS}</div>
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

export default SignUpForm;