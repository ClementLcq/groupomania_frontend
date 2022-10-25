import React from 'react';
import LikeButton from './utils/likeButton';
import ModifyPostModal from './utils/modifyPostModal';
import DeletePostModal from './utils/deletePostModal';
import { useState } from 'react';
import { useEffect } from 'react';

const Post = (props) => {

    const [posts, setPosts] = useState(props.posts)

    const [postIdToDelete, setPostIdToDelete] = useState(undefined);
    const [postIdToModify, setPostIdTModify] = useState(undefined);

    const isAdmin = localStorage.getItem('isAdmin');
    const currentUserId = JSON.parse(localStorage.getItem('userId'));

    const [openModifyModal, setOpenModifyModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);


    useEffect(() => {
        setPosts(props.posts)
    }, [props.posts])

    const likeButtonClicked = (postModified) => {
        props.likeButtonClicked(postModified);
    }


        return (
            <>
            {posts && posts.map((post, index) => { 
                
                const postIsLikedByUser = post.usersLiked.find(user => user === currentUserId) !== undefined;
                return (


                    <article className="post" key={index}>
                        <div className='post__header'>
                            <h3 className='post__header__author'>{post.User[0].email}</h3>
                            { post.createdAt !== post.updatedAt ? (
                            <div className="post__header__date">Édité le {post.updatedAt.split('T').join(' à ').split('.')[0]}</div>
                            ) : (
                            <div className="post__header__date">Créé le {post.createdAt.split('T').join(' à ').split('.')[0]}</div>
                            ) }
                        </div>
                        <img src={post.imageUrl} alt="" className='post__image'/>
                        <p className='post__description'>
                        {post.description}
                        </p>
                            <div className='post__features'>
                                <div className="post__features__opinion">
                                    <LikeButton postId={post._id} postIsLiked={postIsLikedByUser} handleLikeButtonClicked={likeButtonClicked}/>
                                </div>
                                { currentUserId === post.userId || isAdmin === "true" ? (
                                <div className="post__features__editing">
                                    <button className='editButton' onClick={() => {setOpenModifyModal(true); setPostIdTModify(post._id)}}>Modifier</button>   
                                    <button onClick={() => {setOpenDeleteModal(true); setPostIdToDelete(post._id)}} className='deleteButton'>Supprimer</button>
                                </div>
                                ) : null}
                            </div>
                    </article>
            )})
        }

        {
            ((!posts || (posts && posts.length === 0)) && (
                <article className="post">
                    <p className='post__description'>
                        Pas de post pour le moment
                    </p>
                </article>
            ))
        }
            <ModifyPostModal open={openModifyModal} onClose={() => {setOpenModifyModal(false); setPostIdTModify(undefined)}} postId={postIdToModify}/>
            <DeletePostModal open={openDeleteModal} onClose={() =>  {setOpenDeleteModal(false); setPostIdToDelete(undefined)}} postId={postIdToDelete}/>
        </>
        )
}

export default Post;