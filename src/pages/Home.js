import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className='home'>
                <h3 className='home__title'>Bonjour et bienvenue sur le réseau social de notre entreprise Groupomania</h3>
                <p>Veuillez cliquer sur Login pour vous connecter. Si vous n'avez pas encore de compte, veuillez cliquer sur Signup pour vous enregistrer.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;