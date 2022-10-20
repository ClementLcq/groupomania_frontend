import {React} from 'react';
import axios from 'axios';

const DeletePostModal = ({open, onClose, postId}) => {

        const deletePost = async () => { 
                    try {
                        const currentPostId = postId;
                        const token = localStorage.getItem('token');
                        await axios.delete(`http://localhost:3001/api/posts/${currentPostId}`, {headers: {Authorization: `Bearer ${token}`}});
                        window.location.reload();
                    } catch (error) {
                        console.log(error)
                    }
                }

        if(!open) return null

    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => e.stopPropagation()} className="modalContainer deletePost">
                <button onClick={onClose} className="closeButton">X</button>
               
                    <p className='deletePost__infos'>Attention, vous êtes sur le point de supprimer votre post. En êtes-vous sur ?</p>
                
                <div className='deletePost__options'>
                    <button onClick={onClose} className="editButton">Retour</button>
                    <button onClick={deletePost} className='deleteButton'>Supprimer</button>
                </div>
            </div>
        </div>
    );
}

export default DeletePostModal;

