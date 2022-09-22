import React from 'react';
// import componentDidMount from 'react';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const UserSettings = () =>{

      return (
            <section className='userSettings'>
                <p>Bonjour Nom de l'utilisateur,</p>
                <p>nous sommes le {date}.</p>
            </section>
   ) 
  }

// const UserSettings = () => {
//     const current = new Date();
//     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

//     componentDidMount() {
//         fetch('http://localhost:3000/users')
//         .then(res => res.json());
//     }
//     render() {
//         return (
//             <section className='userSettings'>
//                 <p>Bonjour Nom de l'utilisateur,</p>
//                 <p>nous sommes le {date}.</p>
//             </section>
//         );}
// };

export default UserSettings;