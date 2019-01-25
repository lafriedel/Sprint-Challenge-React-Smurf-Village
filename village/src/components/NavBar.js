import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div>
            <Link to="/smurf-form">Add Smurf</Link>
            <Link to="/">Back to Village</Link>
        </div>
    );
}

export default NavBar;