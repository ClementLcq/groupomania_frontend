import React from 'react';


const CreatePostOptions = () => {


    return (
        <section className='createPost__options'>

            <textarea name="description" id="description" cols="30" rows="10">Qu'avez-vous en tête aujourd'hui ?</textarea>
            <div className="createPost__options__file-input">
                <input type="file" id="file" className="file" />
                <label for="file">
                    Ajouter une image
                    <p className="file-name"></p>
                </label>
            </div>
            <button className="createPost__options__submit">Publier</button>
        </section>

    );
};

export default CreatePostOptions;