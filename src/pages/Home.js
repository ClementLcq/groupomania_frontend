import React from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import Navigation from '../components/Layout/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className='home'>
                <h3 className='home__title'>Bonjour et bienvenue sur le réseau social de notre entreprise Groupomania</h3>
                <p>Veuillez cliquer sur "Se connecter" pour accéder aux posts de vos collègues</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;