import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ModifyPostModal = ({open, onClose, postId} ) => {

    const [post, setPost] = useState({});
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const token = localStorage.getItem("token");

    const getPost = async () => {
        const currentPostId = postId;
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${currentPostId}`, {headers: {Authorization: `Bearer ${token}`}})
        setPost(res.data);
        setFile(res.data.image);
        setDescription(res.data.description);
    }

    useEffect(() => {  
        if(postId)
        getPost();
    }, [postId, token])

    const userId = JSON.parse(localStorage.getItem('userId'));

    const handleFormChange = async (e) => {
        const newFile = file ? file : "";
        e.preventDefault();
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("image", newFile);
        formData.append("description", description);
        await axios.put(`http://localhost:3001/api/posts/${postId}`, formData, {headers: {Authorization: `Bearer ${token}`}});
        window.location.reload();
    };

    if(!open) return null
    
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => e.stopPropagation()} className="modalContainer createPost__options">
                <button onClick={onClose} className="closeButton">X</button>
                <form className='modalContainer__form' onSubmit={handleFormChange}>
                        <textarea type="text"
                                id="description"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name="description" 
                                cols="30" rows="10" 
                                placeholder="Qu'avez-vous en tête aujourd'hui ?">
                        </textarea>
                        <div className="createPost__options__file-input">
                            <input type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} className="file" />
                            <label htmlFor="file">
                                Ajouter une image
                                <p className="file-name"></p>
                            </label>
                            <input className="createPost__options__submit" type="submit"  value="Mettre à jour l'article"/>
                        </div>
                </form>
            </div>
            
        </div>
    );
};

export default ModifyPostModal;