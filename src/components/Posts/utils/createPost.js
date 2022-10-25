import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const CreatePost = () => {
    const [showCreateOptions, setShowCreateOptions] = useState(false);
    const handleClick = () => {
        setShowCreateOptions(!showCreateOptions);
    };

    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState(null);

    const handleFormSubmit = async (e) => {

        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem('userId'));
        const userEmail = JSON.parse(localStorage.getItem('userEmail'));
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("userEmail", userEmail);
        formData.append("image", imageUrl);
        formData.append("description", description);

        await axios.post(`${process.env.REACT_APP_API_URL}/api/posts`, formData, {headers: {Authorization: `Bearer ${token}`}});
        document.location.reload();
    }
    
    return (
        <section className='createPost'>
            <button className="createPost__input" onClick={handleClick}>
                { showCreateOptions ? "-" : "+"}
            </button>
            { showCreateOptions ? (
                <section className='createPost__options'>
                    <form onSubmit={handleFormSubmit} action="/posts" method="post" encType="multipart/form-data">

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
                            <input type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setImageUrl(e.target.files[0])} className="file" />
                            <label htmlFor="file">
                                Ajouter une image
                                <p className="file-name"></p>
                            </label>
                        </div>

                        <button className="createPost__options__submit" type="submit" >Publier</button>
                    
                    </form>
                </section>
            ) : null}
        </section>
    );
};

export default CreatePost;