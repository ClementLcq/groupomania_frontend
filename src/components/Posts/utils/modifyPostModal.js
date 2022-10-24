import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const ModifyPostModal = ({open, onClose, postId} ) => {


    const [post, setPost] = useState({});
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    // const [postImage, setPostImage] = useState();

    const token = localStorage.getItem("token");

    // console.log(postId);

    // const handleFile = (e) => {
    //     setPostImage(URL.createObjectURL(e.target.value[0]));
    //     setFile(e.target.file[0]);
    // }

    const url = "http://localhost:3001/api";

    useEffect(() => {
        const getPost = async () => {
            const currentPostId = postId;
            const res = await axios.get(`${url}/posts/${currentPostId}`, {headers: {Authorization: `Bearer ${token}`}})
            setPost(res.data);
            setFile(res.data.image);
            setDescription(res.data.description);
        };
        getPost();
    }, [postId, token])

    // useEffect(()=> {
        // axios.get(`${url}/posts/${postId}`, {headers: {Authorization: `Bearer ${token}`}})
    //     .then( res => {
    //         const data = res.data;
    //         // console.log(data);
    //         setDescription(() => data.description)
    //         setFile(() => data.imageUrl)

    //     })
    // }, [])

    // récup de l'userId et userEmail dans le LS
    const userId = JSON.parse(localStorage.getItem('userId'));
    const userEmail = JSON.parse(localStorage.getItem('userEmail'));

    // const handleFormChange = async (e) => {
    //     const newFile = file ? file : "";
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("userId", userId);
    //     formData.append("image", newFile);
    //     formData.append("description", description);
    //     await axios.put(`http://localhost:3001/api/posts/${postId}`, formData, {headers: {Authorization: `Bearer ${token}`}});
    //     window.location.reload();
    // };

    const handleFormChange = async (e) => {
        e.preventDefault();
        if (description || file) {
            const formData = new FormData();
            formData.append("userId", userId);
            formData.append("userEmail", userEmail);
            formData.append("image", file);
            formData.append("description", description);

            console.log(formData)

            await axios.put(`http://localhost:3001/api/posts/${postId}`, formData, {headers: {Authorization: `Bearer ${token}`}});
            setDescription("");
            setFile(null);
            window.location.reload();
        }
        
    }

    if(!open) return null
    
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => e.stopPropagation()} className="modalContainer createPost__options">
                <button onClick={onClose} className="closeButton">X</button>
                <form action="/posts" method="post" encType="multipart/form-data" className='modalContainer__form' onSubmit={handleFormChange}>
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
                            <button className="createPost__options__submit" type="submit" onClick={onClose}>Mettre à jour l'article</button>   
                        </div>
                </form>
            </div>
            
        </div>
    );
};

export default ModifyPostModal;