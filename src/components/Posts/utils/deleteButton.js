import {React} from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    
    const {posts} = props;
    console.log(posts);
    
    const token = localStorage.getItem('token');
    const currentUserId = JSON.parse(localStorage.getItem('userId'));

    const HandleClick = async () => {
        posts.map((post, index) => {
            const id = post._id;
            console.log(id)
    
            if (currentUserId === post.userId) {
                const deletePost = async (post) => {
                    try {
                        await axios.delete(`http://localhost:3001/api/posts/${id}`, {headers: {Authorization: `Bearer ${token}`}});
                        window.location.reload();
                    } catch (error) {
                        console.log(error)
                    }
                }
                deletePost();
            } else {
                console.log("Erreur, vous ne pouvez pas supprimer ce post")
            }

            
        })
    }
    return (
        <button onClick={HandleClick} className='deleteButton'>Supprimer</button>
    );
}

export default DeleteButton;

