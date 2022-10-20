import React from 'react';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LikeButton = (props) => {

    const postIsLiked = props.postIsLiked;
    const postId = props.postId;
    console.log(postId);
    const token = localStorage.getItem("token");
    const currentUserId = JSON.parse(localStorage.getItem("userId"));

    // const [like, setLike] = useState(props.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    console.log(isLiked)

    const handleClick = async () => {
        
        await axios.post(`http://localhost:3001/api/posts/${postId}/like`, currentUserId, {headers: {Authorization: `Bearer ${token}`}})
        // const postModified = res.data
        .then((res) => {
            const postModified = res.data;
            props.handleLikeButtonClicked(postModified);
            setIsLiked(true)
        })
        .catch((err) => console.error(err));

    }

    return (
        <button className='likeButton'>
           <FontAwesomeIcon className={postIsLiked ? 'btn-liked' : 'btn-unliked'} onClick={handleClick} icon={faHeart} /> 
        </button>

    );
};

export default LikeButton;