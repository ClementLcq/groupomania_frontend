import React from 'react';
import LikeButton from './utils/likeButton';

const Post = () => {
    return (
            <article className="post">
                <div className='post__header'>
                    <h3 className='post__header__author'>Auteur du post</h3>
                    <div className="post__header__date"> 11:01 06/09/2022</div>
                </div>
                <img src="./payet.jpg" alt="" className='post__image' />
                <p className='post__description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed orci rhoncus, ornare ipsum ut, congue augue. Sed ornare urna leo, non dapibus tortor porttitor accumsan. Quisque volutpat scelerisque nisl sit amet luctus. Nullam laoreet hendrerit mi feugiat porttitor. Ut id lobortis mi. Aliquam ipsum nisl, placerat ac velit in, consequat congue orci. Duis metus eros, pharetra at metus et, lacinia finibus ex.</p>
                <div className='post__features'>
                    <div className="post__features__opinion">
                        <LikeButton />
                    </div>
                    <div className="post__features__editing">
                        <button className='editButton'>Modifier</button>
                        <button className='deleteButton'>Supprimer</button>
                    </div>
                </div>
            </article>
            
    );
};

export default Post;