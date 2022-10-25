import React from 'react';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const userEmail = JSON.parse(localStorage.getItem("userEmail"));

const UserSettings = () =>{

      return (
            <section className='userSettings'>
                <p className='userSettings__hello'>Bonjour {userEmail},</p>
                <p>nous sommes le {date}.</p>
            </section>
   ) 
  };

export default UserSettings;