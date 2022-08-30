import React, { useContext } from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import Navigation from '../components/Layout/Navigation';
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';
import Trending from './Trending';

const Login = () => {
    const uid = useContext(UidContext);
    
    return (
        <div className='log-page'>
            {uid ? (
                <Trending />
            ) : (
            <div>
                <Logo />
                <Navigation />
                <div className="log-container">
                    <Log signin={true} signup={false} />
                </div>
                <Footer />
            </div>
            )}
            
        </div>
    );
};

export default Login;