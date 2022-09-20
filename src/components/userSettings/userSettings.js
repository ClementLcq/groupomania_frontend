import React from 'react';

const UserSettings = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <section className='userSettings'>
            <p>Bonjour Nom de l'utilisateur,</p>
            <p>nous sommes le {date}.</p>
        </section>
    );
};

export default UserSettings;