import React from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import NavigationLogOn from '../components/Layout/LogOn/navigation.LogOn';

const LogOut = () => {
    return (
        <div>
            <Logo />
            <NavigationLogOn />
            Log out
            <Footer />
        </div>
    );
};

export default LogOut;