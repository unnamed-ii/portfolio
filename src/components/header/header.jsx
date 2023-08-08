import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__menu">
                <ul className="header__menu-links">
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#contacts-section">Contact me</a></li>
                    <li><a href="#links-section">Links</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;