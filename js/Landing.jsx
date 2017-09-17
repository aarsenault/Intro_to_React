import React from 'react';
// Link generates a tags with the correct link to go to
import { Link } from 'react-router-dom';

const Landing = () => (
    <div className="landing">
        <h1> SVideo </h1>
        <input type="text" placeholder="Search" />
        <Link to="Search"> or Browse All </Link>
    </div>
);

export default Landing;
