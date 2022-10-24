import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const CreatePost = (props) => {
    const [showCreateOptions, setShowCreateOptions] = useState(false);
    const handleClick = () => {
        setShowCreateOptions(!showCreateOptions);
        // newPost();
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.onPostCreated("Submit et placer le post");
    // };

    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleFormSubmit = async (e) => {

        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem('userId'));
        const userEmail = JSON.parse(localStorage.getItem('userEmail'));
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("userEmail", userEmail);
        formData.append("image", file);
        formData.append("description", description);

        await axios.post("http://localhost:3001/api/posts", formData, {headers: {Authorization: `Bearer ${token}`}});
        setDescription("");
        setFile(null);
        window.location.reload();
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
                            <input type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} className="file" />
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

CreatePost.defaultProps = {onPostCreated : null}; 
CreatePost.propTypes = {onPostCreated: PropTypes.func};

export default CreatePost;