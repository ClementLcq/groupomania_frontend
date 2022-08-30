import React from 'react';
import { NavLink} from "react-router-dom"

const NavigationLogOn = () => {
    return (
       <div className="navigation">
            <ul>
                <NavLink to="/trending" className={(nav) => (nav.isActive ? "__active" : "")}>
                    <li>Trending</li>
                </NavLink>
                <NavLink to="/logout" className={(nav) => (nav.isActive ? "__active" : "")}>
                    <li>Log out</li>
                </NavLink>
            </ul>
       </div>
    );
};

export default NavigationLogOn;