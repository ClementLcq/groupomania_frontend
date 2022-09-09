import React from 'react';
import { useState } from 'react';
import CreatePostOptions from './createPostOptions';

const CreatePost = () => {
    const [showCreateOptions, setShowCreateOptions] = useState(false);
    const handleClick = () => setShowCreateOptions(true);
    
    return (
        <section className='createPost'>
            <button className="createPost__input" onClick={handleClick}>+</button>
            { showCreateOptions ? <CreatePostOptions /> : null}

        </section>
    );

    
};

export default CreatePost;