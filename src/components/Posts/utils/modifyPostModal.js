import React, {useState} from 'react';
// import Modal from 'react-bootstrap/Modal';

const ModifyPostModal = ({open, onClose}, props) => {


    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onPostCreated("Submit et placer le post");
    };

    if(!open) return null
    
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => e.stopPropagation()} className="modalContainer createPost__options">
                <button onClick={onClose} className="closeButton">X</button>
                <form action="/posts" method="post" encType="multipart/form-data" className='modalContainer__form'>
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
                            <input type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} className="file" />
                            <label htmlFor="file">
                                Ajouter une image
                                <p className="file-name"></p>
                            </label>
                            <button className="createPost__options__submit" type="submit" onSubmit={handleSubmit} onClick={onClose}>Mettre à jour l'article</button>   
                        </div>
                </form>
            </div>
            
        </div>
    );
};

export default ModifyPostModal;





// const ModifyButton = (props) => {

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.onPostCreated("Submit et placer le post");
    // };

    // const [description, setDescription] = useState("");
    // const [file, setFile] = useState(null);

//     return (  
//         <div>      
//             <button className='editButton' onClick={handleShow}>Modifier</button>
//             <>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header>
//                 <Modal.Title>Modifier votre article</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                 <section className='createPost__options'>
                    // <form action="/posts" method="post" encType="multipart/form-data">
                    //     <textarea type="text"
                    //             id="description"
                    //             required
                    //             value={description}
                    //             onChange={(e) => setDescription(e.target.value)}
                    //             name="description" 
                    //             cols="30" rows="10" 
                    //             placeholder="Qu'avez-vous en tête aujourd'hui ?">
                    //     </textarea>
                    //     <div className="createPost__options__file-input">
                    //         <input type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} className="file" />
                    //         <label htmlFor="file">
                    //             Ajouter une image
                    //             <p className="file-name"></p>
                    //         </label>
                    //     </div>
                        
                    // </form>
//                 </section>
//                 </Modal.Body>
//                 <button className="createPost__options__submit" onClick={handleClose}>Fermer</button>
                // <button className="createPost__options__submit" type="submit" onSubmit={handleSubmit} onClick={handleClose}>Mettre à jour l'article</button>
//             </Modal>
//             </>
//         </div>       
//     );
// };

// export default ModifyButton;