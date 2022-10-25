import React from 'react';
import Post from './post';
import axios from 'axios';
import { useEffect } from 'react';

const DisplayPosts = ({posts, setPosts}) => {

    const token = localStorage.getItem("token");

    useEffect(() => {
        const getAllPosts = () => {
            axios.get(`${process.env.REACT_APP_API_URL}/api/posts`, {headers: {Authorization: `Bearer ${token}`}})
            .then((res) => {
                const allPosts = res.data;
                setPosts(allPosts);
            })
            .catch((err) => console.error(err));
        }
        getAllPosts();
    }, [setPosts, token]);

    
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