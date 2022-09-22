import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayPosts = () => {

    const [posts, getPosts] = useState('');

    const url = "http://localhost:3001/api";

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = () => {
        axios.get(`${url}/posts`)
        .then((res) => {
            const allPosts = res.data.posts.allPosts;
            getPosts(allPosts);
        })
        .catch((err) => console.error(err));
    }

    return (
        <section className='displayPosts'>
            <Post posts={posts}/>  
        </section>
    );
};

DisplayPosts.defaultProps = {newPostCreated : null}; 
DisplayPosts.propTypes = {newPostCreated: PropTypes.string};
// Ne pas oublier de remplacer string par object

export default DisplayPosts;