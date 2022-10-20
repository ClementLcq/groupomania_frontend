import React from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import NavigationLogOn from '../components/Layout/LogOn/navigation.LogOn';

const LogOut = () => {

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        localStorage.removeItem('isAdmin');

        window.location = "/";
    }

    return (
        <div>
            <Logo />
            <NavigationLogOn />
            <div className='logout'>
                <p className='logout__text' > Merci d'être venu sur notre réseau social.<br/> Veuillez cliquer sur le bouton pour vous déconnecter</p>
                <button onClick={handleLogOut} className='logout__button'>Se déconnecter</button>
            </div>
            
            <Footer />
        </div>
    );
};

export default LogOut;