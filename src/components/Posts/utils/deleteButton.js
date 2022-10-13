import {React} from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

        const deletePost = async () => { 
                    try {
                        const postId = props.postId;
                        const token = localStorage.getItem('token');
                        await axios.delete(`http://localhost:3001/api/posts/${postId}`, {headers: {Authorization: `Bearer ${token}`}});
                        window.location.reload();
                    } catch (error) {
                        console.log(error)
                    }
                }
    return (
        <button onClick={deletePost} className='deleteButton'>Supprimer</button>
    );
}

export default DeleteButton;

