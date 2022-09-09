import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) => {
        setIsActive(current => !current);
    }
    return (
        <button className='likeButton'>
           <FontAwesomeIcon className={isActive ? 'btn-liked' : 'btn-unliked'} onClick={handleClick} icon={faHeart} /> 
        </button>

    );
};

export default LikeButton;