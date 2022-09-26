import React from 'react';
// import DisplayPosts from './displayPosts';
import LikeButton from './utils/likeButton';
// import {useEffect, useState} from "react";
// import axios from "axios";

const Post = (props) => {

    const {posts} = props;

    if({posts}.length > 0) { 

        return (
            posts.map((post) => {
                console.log(post)
                return (
                    <article className="post" key={post._id}>
                        <div className='post__header'>
                            <h3 className='post__header__author'>{post.userId}</h3>
                            <div className="post__header__date"> 11:01 06/09/2022</div>
                        </div>
                        <img src="" alt="" className='post__image' key={post.imageUrl}/>
                        <p className='post__description'>
                        {post.description}
                        </p>
                        <div className='post__features'>
                            <div className="post__features__opinion">
                                <LikeButton key={post.likes} />
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
        // return (
        //     <>
        //         {DisplayPosts(props)}
        //     </>
        // )
}

// const Post = () => {
//     const url = 'https://localhost:3001/api/posts';
//     const [post, setPost] = useState([]);

//     useEffect(() => {
//         axios.get(url).then(res => {
//         setPost(res.data.post);
//         })
//     }, [])
  
//     return (
//             <article className="post">
//                 <div className='post__header'>
//                     <h3 className='post__header__author'>Auteur du post</h3>
//                     <div className="post__header__date"> 11:01 06/09/2022</div>
//                 </div>
//                 <img src="./payet.jpg" alt="" className='post__image' />
//                 <p className='post__description'>
//                 {post.description}
//                 </p>
//                 <div className='post__features'>
//                     <div className="post__features__opinion">
//                         <LikeButton />
//                     </div>
//                     <div className="post__features__editing">
//                         <button className='editButton'>Modifier</button>
//                         <button className='deleteButton'>Supprimer</button>
//                     </div>
//                 </div>
//             </article>
            
//     );
// };

export default Post;