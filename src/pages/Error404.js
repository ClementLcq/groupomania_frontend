import React from 'react';
import Logo from '../components/Layout/Logo';
import NavigationLogOn from '../components/Layout/LogOn/navigation.LogOn';

const Error404 = () => {
    return (
        <div>
            <Logo />
            <NavigationLogOn />
            <p className='error404'>Page non trouvée, veuillez retourner sur la page des posts</p>
        </div>
    );
};

export default Error404;