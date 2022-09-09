import React from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import NavigationLogOn from '../components/Layout/LogOn/navigation.LogOn';
import CreatePost from '../components/Posts/createPost';
import Posts from '../components/Posts/displayPosts';
import UserSettings from '../components/userSettings/userSettings';

const Trending = () => {
    return (
        <div>
            <Logo />
            <NavigationLogOn />
            <section className='trending'>
                <UserSettings />
                <Posts />
                <CreatePost />
            </section>
            <Footer />
        </div>
    );
};

export default Trending;