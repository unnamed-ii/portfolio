import React from 'react';
import './home.scss';

const Home = () => {
    return (
        <section className="home">
            <div className="home__info">
                <div className="home__info-title">
                    Front-End React Developer
                </div>
                <div className="home__info-text">
                    Hi, I'm Isa Ingashev. A passionate front-end developer based in Izmir / Turkey
                </div>
                <ul className="home__info-links">
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">LeetCode</a></li>
                    <li><a href="#">CodeWars</a></li>
                </ul>
                <ul className="home__info-stack">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
        </section>
    );
};

export default Home;