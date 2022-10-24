import React from 'react';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LikeButton = (props) => {

    const token = localStorage.getItem("token");

    const [postId, setPostId] = useState(props.postId)
    useEffect(() => {
        setPostId(props.postId)
    }, [props.postId])

    const [postIsLiked, setPostIsLiked] = useState(props.postIsLiked)
    useEffect(() => {
        setPostIsLiked(props.postIsLiked)
    }, [props.postIsLiked])

    const handleClick = async () => {
        
        await axios.put(`http://localhost:3001/api/posts/${postId}/like`, {}, {headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            const postModified = res.data;
            props.handleLikeButtonClicked(postModified);
            setPostIsLiked(!postIsLiked);
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