import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
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

    // const [like, setLike] = useState(posts.likes.length);
    // const [isLiked, setIsLiked] = useState(false);


    const likeButtonClicked= (postModified) => {
        // aller chercher post Id dans la liste posts qui est dans le state 
        
       

        // if(likedValue) alors j'ajoute le userId dans la liste
        // sinon je l'enlève

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

DisplayPosts.defaultProps = {newPostCreated : null}; 
DisplayPosts.propTypes = {newPostCreated: PropTypes.string};
// Ne pas oublier de remplacer string par object

export default DisplayPosts;