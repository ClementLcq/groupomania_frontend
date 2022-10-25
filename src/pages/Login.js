import React from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import Navigation from '../components/Layout/Navigation';
import Log from '../components/Log';

const Login = () => {    
    return (
        <div className='log-page'>  
                <Logo />
                <Navigation />
                <div className="log-container">
                    <Log signin={true} signup={false} />
                </div>
                <Footer />
        </div>
    );
};

export default Login;