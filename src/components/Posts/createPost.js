import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const CreatePost = (props) => {
    const [showCreateOptions, setShowCreateOptions] = useState(false);
    const handleClick = () => setShowCreateOptions(!showCreateOptions);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onPostCreated("Submit et placer le post");
    };
    
    return (
        <section className='createPost'>
            <button className="createPost__input" onClick={handleClick}>
                { showCreateOptions ? "-" : "+"}
            </button>
            { showCreateOptions ? 
                <section className='createPost__options'>
                    <form onSubmit={handleSubmit}>
                        <textarea name="description" id="description" cols="30" rows="10" placeholder="Qu'avez-vous en tête aujourd'hui ?"></textarea>
                        <div className="createPost__options__file-input">
                            <input type="file" id="file" className="file" />
                            <label htmlFor="file">
                                Ajouter une image
                                <p className="file-name"></p>
                            </label>
                        </div>
                        <button className="createPost__options__submit" type="submit">Publier</button>
                    </form>
                </section>
             : null}
        </section>
    );
};

CreatePost.defaultProps = {onPostCreated : null}; 
CreatePost.propTypes = {onPostCreated: PropTypes.func};

export default CreatePost;