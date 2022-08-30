import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les image importées depuis la balise IMG sont diposnibles dans "public" */}
            <img src="./logo.png" alt="logo Groupomania" />
        </div>
    );
};

export default Logo;