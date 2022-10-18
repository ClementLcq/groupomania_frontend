import React from 'react';
// import DisplayPosts from './displayPosts';
import LikeButton from './utils/likeButton';
import ModifyButton from './utils/modifyButton';
import DeleteButton from './utils/deleteButton';
// import {useEffect, useState} from "react";
// import axios from "axios";

const Post = (props) => {

    const {posts} = props;
    // console.log(posts);
    
    const likeButtonClicked = (postModified) => {
        props.likeButtonClicked(postModified);
    }

    if(posts.length > 0) { 

        const currentUserId = JSON.parse(localStorage.getItem('userId'));

        return (
            posts.map((post, index) => {

                const isPostLikedByUser = post.usersLiked.find(user => user === currentUserId) !== undefined;


                return (
                    <article className="post" key={index}>
                        <div className='post__header'>
                            <h3 className='post__header__author'>{post.User[0].email}</h3>
                            <div className="post__header__date"> {post.createdAt.split('T').join(' ').split('.')[0]}</div>
                        </div>
                        <img src={post.imageUrl} alt="" className='post__image'/>
                        <p className='post__description'>
                        {post.description}
                        </p>
                            <div className='post__features'>
                                { currentUserId !== post.userId ? (
                                <div className="post__features__opinion">
                                    <LikeButton postIsLiked={isPostLikedByUser} handleLikeButtonClicked={likeButtonClicked}/>
                                </div>
                                ) : null}
                                { currentUserId === post.userId ? (
                                <div className="post__features__editing">
                                    <ModifyButton />
                                    {posts && <DeleteButton postId={post._id}/>}
                                </div>
                                ) : null}
                            </div>
                          
                    </article>
                )
            })
        )} else {
            return (
                <article className="post">
                    <p className='post__description'>
                        Pas de post pour le moment
                    </p>
                </article>
            )
        }
}

export default Post;