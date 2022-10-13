import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const LikeButton = (props) => {

    const postIsLiked = props.postIsLiked;
    const postId = props.postId;
    const token = localStorage.getItem("token");

    const handleClick = () => {
        
        // await axios.put(`http://localhost:3001/api/posts/${postId}`, {headers: {Authorization: `Bearer ${token}`}});
    }

    return (
        <button className='likeButton'>
           <FontAwesomeIcon className={postIsLiked ? 'btn-liked' : 'btn-unliked'} onClick={handleClick} icon={faHeart} /> 
        </button>

    );
};

export default LikeButton;