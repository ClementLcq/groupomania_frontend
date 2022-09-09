import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const DisplayPosts = (props) => {
    return (
        <section className='displayPosts'>
            <Post />  
            <Post />
        </section>
    );
};

DisplayPosts.defaultProps = {newPostCreated : null}; 
DisplayPosts.propTypes = {newPostCreated: PropTypes.string};
// Ne pas oublier de remplacer string par object

export default DisplayPosts;