import React from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import NavigationLogOn from '../components/Layout/LogOn/navigation.LogOn';
import CreatePost from '../components/Posts/utils/createPost';
import DisplayPosts from '../components/Posts/displayPosts';
import UserSettings from '../components/UserSettings/userSettings';
import { useState } from 'react';

const Trending = () => {
    const [posts, setPosts] = useState([])

    return (
        <div>
            <Logo />
            <NavigationLogOn />
            <section className='trending'>
                <UserSettings />
                <DisplayPosts posts={posts} setPosts={setPosts} />
                <CreatePost />
            </section>
            <Footer />
        </div>
    );
};

export default Trending;