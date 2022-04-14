import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h1>404 not found</h1>
            <Link className='link' to="/">Go Back to Home</Link>
        </div>
    );
};

export default NotFound;