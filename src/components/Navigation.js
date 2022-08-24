import React from 'react';
import { NavLink} from "react-router-dom"

const Navigation = () => {
    return (
       <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "__active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/login" className={(nav) => (nav.isActive ? "__active" : "")}>
                    <li>Login</li>
                </NavLink>
                <NavLink to="/signup" className={(nav) => (nav.isActive ? "__active" : "")}>
                    <li>Signup</li>
                </NavLink>
            </ul>
       </div>
    );
};

export default Navigation;