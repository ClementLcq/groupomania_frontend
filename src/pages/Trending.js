import React from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Layout/Logo';
import NavigationLogOn from '../components/Layout/LogOn/navigation.LogOn';
import CreatePost from '../components/Posts/createPost';
import DisplayPosts from '../components/Posts/displayPosts';
import UserSettings from '../components/userSettings/userSettings';
import { useState } from 'react';

const Trending = () => {
    const handlePostCreated = (postCreated) => {
        console.log("post created");
        setNewPostCreated(postCreated)
    };
    const [newPostCreated, setNewPostCreated] = useState(null);

    return (
        <div>
            <Logo />
            <NavigationLogOn />
            <section className='trending'>
                <UserSettings />
                <DisplayPosts newPostCreated={newPostCreated} />
                <CreatePost onPostCreated={handlePostCreated} />
            </section>
            <Footer />
        </div>
    );
};

export default Trending;