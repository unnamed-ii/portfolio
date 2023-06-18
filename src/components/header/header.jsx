import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__menu">
                <ul className="header__menu-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;