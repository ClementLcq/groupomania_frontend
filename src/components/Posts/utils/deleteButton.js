import {React, useState} from 'react';
// import Post from '../Post';
import axios from 'axios';
import PropTypes from 'prop-types';

const DeleteButton = (props) => {
    
    const [post, setPost] = useState();
    const token = localStorage.getItem('token');

    const handleClick = async () => {
        // try {
        //     await axios.delete(`http://localhost:3001/api/posts/_id`, {headers: {Authorization: `Bearer ${token}`}});
        //     window.location.reload();
        //     setPost();
        // } catch (error) {
        //     console.log(error)
        // }
        await console.log("ecoute sur bouton ok")
    }
    return (
        <button onClick={handleClick} className='deleteButton'>Supprimer</button>
    );
}

export default DeleteButton;

