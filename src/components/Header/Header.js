import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container-fluid px-5 py-5  mb-5 text-center bg-secondary">
            <h1 className="team-title">Make an Avengers team</h1>
            <h3 className="Author-title">Best JavaScript Books for Author</h3>
            <h2 className="Budget-title">Total Budget : 100 Million</h2>
        </div>
    );
};

export default Header;