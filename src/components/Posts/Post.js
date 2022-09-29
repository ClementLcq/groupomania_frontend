import React from 'react';
// import DisplayPosts from './displayPosts';
import LikeButton from './utils/likeButton';
// import {useEffect, useState} from "react";
// import axios from "axios";

const Post = (props) => {

    const {posts} = props;
    const userEmail = JSON.parse(localStorage.getItem('userEmail'));
    console.log(posts);
    

    if(posts.length > 0) { 

        return (
            posts.map((post, index) => {
                return (
                    <article className="post" key={index}>
                        <div className='post__header'>
                            <h3 className='post__header__author'>{userEmail}</h3>
                            <div className="post__header__date"> {post.createdAt}</div>
                        </div>
                        <img src={post.imageUrl} alt="" className='post__image'/>
                        <p className='post__description'>
                        {post.description}
                        </p>
                        <div className='post__features'>
                            <div className="post__features__opinion">
                                <LikeButton/>
                            </div>
                            <div className="post__features__editing">
                                <button className='editButton'>Modifier</button>
                                <button className='deleteButton'>Supprimer</button>
                            </div>
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