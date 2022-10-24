import React from 'react';
import Post from './Post';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayPosts = () => {

    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem("token");

    const url = "http://localhost:3001/api";

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = () => {
        axios.get(`${url}/posts`, {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            const allPosts = res.data;
            setPosts(allPosts);
        })
        .catch((err) => console.error(err));
    }

    const likeButtonClicked= (postModified) => {
        const indexPostToModify = posts.findIndex(post => post._id === postModified._id)
        let newPost = posts;
        newPost[indexPostToModify] = postModified;
        setPosts(newPost);
    }

    return (
        <section className='displayPosts'>
            {posts && <Post posts={posts} likeButtonClicked={likeButtonClicked}/>}   
        </section>
    );
};


export default DisplayPosts;