import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import PostDataService from "../../services/PostService";
import axios from 'axios';
// import { useForm } from "react-hook-form"


const CreatePost = (props) => {
    const [showCreateOptions, setShowCreateOptions] = useState(false);
    const handleClick = () => {
        setShowCreateOptions(!showCreateOptions);
        // newPost();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onPostCreated("Submit et placer le post");
    };

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

        await axios.post("http://localhost:3001/api/posts", formData, {headers: {Authorization: `Bearer ${token}`}}, {body : JSON.stringify(formData)});
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
                            <input type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.value)} className="file" />
                            <label htmlFor="file">
                                Ajouter une image
                                <p className="file-name"></p>
                            </label>
                        </div>

                        <button className="createPost__options__submit" type="submit" onSubmit={handleSubmit}>Publier</button>
                    
                    </form>
                </section>
            ) : null}
        </section>
    );
};


// const CreatePost = (props) => {
//     const [showCreateOptions, setShowCreateOptions] = useState(false);
//     const handleClick = () => {
//         setShowCreateOptions(!showCreateOptions);
//         // newPost();
//     };

//     const {register, handleSubmit} = useForm();
//     const [description, setDescription] = useState("");
//     const [file, setFile] = useState(null);

//     const onSubmit = (data) => console.log(data)

//     return (
//         <section className='createPost'>
//             <button className="createPost__input" onClick={handleClick}>
//                 { showCreateOptions ? "-" : "+"}
//             </button>
//             { showCreateOptions ? (
//                 <section className='createPost__options'>
//                     <form onSubmit={handleSubmit(onSubmit)} action="/posts" method="post" encType="multipart/form-data">

//                         <textarea 
//                         {...register("description", {required: true})}
//                         type="text"
//                         id="description"
//                         required
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         cols="30" rows="10" 
//                         placeholder="Qu'avez-vous en tête aujourd'hui ?">
//                         </textarea>

//                         <div className="createPost__options__file-input">
//                             <input {...register("file", {required: true})} value={file} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.value)} className="file" />
//                             <label htmlFor="file">
//                                 Ajouter une image
//                                 <p className="file-name"></p>
//                             </label>
//                         </div>

//                         <button className="createPost__options__submit" type="submit" >Publier</button>
                    
//                     </form>
//                 </section>
//             ) : null}
//         </section>
//     );
// }

// const CreatePost = (props) => {
//     const [showCreateOptions, setShowCreateOptions] = useState(false);
//     const handleClick = () => {
//         setShowCreateOptions(!showCreateOptions);
//         newPost();
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.onPostCreated("Submit et placer le post");
//     };

//     const initialPostState = {
//         id: null,
//         userId: null,
//         description: "",
//         imageUrl: "",
//         likes: 0,
//         userLiked : ""
//     };

//     const [post, setPost] = useState(initialPostState);
//     const [submitted, setSubmitted] = useState(false);

//     const handleInputChange = e => {
//         const { name, value } = e.target;
//         setPost({ ...post, [name]: value });
//       };

//     const savePost = () => {
//         let data = {
//           post
//         };

//         console.log(data);

//         const token = localStorage.getItem("token");

//         // const postData = JSON.stringify(data);

//         // const email = JSON.parse(localStorage.getItem("userEmail"));

//         // PostDataService.create(data)
//         axios({
//             method:"post",
//             url:'http://localhost:3001/api/posts',
//             data: {
//                 description: post.description,
//                 imageUrl : post.imageUrl,
//             },
//             headers: {
//                 "Content-type": "application/json",
//                 "Authorization": `Bearer ${token}`
//               }
//         })
//             .then((res) => {
//                 setPost({
//                     id: res.data.post._id,
//                     userId: res.data.post.userId,
//                     description : res.data.post.description,
//                     imageUrl : res.data.post.imageUrl,
//                     likes: 0,
//                     userLiked : ""
//                 });
//                 setSubmitted(true);
//                 // console.log(res.data);
//             })
//             .catch((err) => console.error(err.res.data));
//     }

//     const newPost = () => {
//         setPost(initialPostState);
//         setSubmitted(false);
//     }
    
//     return (
//         <section className='createPost'>
//             <button className="createPost__input" onClick={handleClick}>
//                 { showCreateOptions ? "-" : "+"}
//             </button>
//             { showCreateOptions ? (
//                 <section className='createPost__options'>
//                     <form onSubmit={handleSubmit}>

//                         <textarea type="text"
//                         id="description"
//                         required
//                         value={post.description}
//                         onChange={handleInputChange}
//                         name="description" 
//                         cols="30" rows="10" 
//                         placeholder="Qu'avez-vous en tête aujourd'hui ?">
//                         </textarea>

//                         <div className="createPost__options__file-input">
//                             <input type="file" id="file" className="file" />
//                             <label htmlFor="file">
//                                 Ajouter une image
//                                 <p className="file-name"></p>
//                             </label>
//                         </div>

//                         <button className="createPost__options__submit" type="submit" onClick={savePost}>Publier</button>
                    
//                     </form>
//                 </section>
//             ) : null}
//         </section>
//     );
// };

CreatePost.defaultProps = {onPostCreated : null}; 
CreatePost.propTypes = {onPostCreated: PropTypes.func};

export default CreatePost;