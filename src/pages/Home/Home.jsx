import React from 'react';
import './home.scss';
import Container from "../../components/container/container";

import {ReactComponent as LinkedInIcon} from '../../images/icons/linkedin.svg';
import {ReactComponent as GitHubIcon} from '../../images/icons/github.svg';
import {ReactComponent as LeetCodeIcon} from '../../images/icons/leetcode.svg';
import {ReactComponent as CodeWarsIcon} from '../../images/icons/codewars-red.svg';

import {ReactComponent as HtmlIcon} from '../../images/icons/html5.svg';
import {ReactComponent as CssIcon} from '../../images/icons/css3.svg';
import {ReactComponent as SassIcon} from '../../images/icons/sass.svg';
import {ReactComponent as JavaScriptIcon} from '../../images/icons/javascript.svg';
import {ReactComponent as ReactIcon} from '../../images/icons/react.svg';

const Home = () => {
    return (
        <section className="home">
            <Container>
                <div className="home__info">
                    <div className="home__info-title">
                        Front-End React Developer
                    </div>
                    <div className="home__info-text">
                        Hi, I'm Isa Ingashev. A passionate front-end developer based in Izmir / Turkey 📍
                    </div>
                    <ul className="home__info-links">
                        <li><a href="https://www.linkedin.com/in/isa-ingashev"><LinkedInIcon className="icon"/></a></li>
                        <li><a href="https://github.com/unnamed-ii"><GitHubIcon className="icon"/></a></li>
                        <li><a href="https://leetcode.com/unnamed-II/"><LeetCodeIcon className="icon"/></a></li>
                        <li><a href="https://www.codewars.com/users/unnamed-ii"><CodeWarsIcon className="icon"/></a></li>
                    </ul>
                    <ul className="home__info-stack">
                        <li><HtmlIcon className="icon"/></li>
                        <li><CssIcon className="icon"/></li>
                        <li><SassIcon className="icon"/></li>
                        <li><JavaScriptIcon className="icon"/></li>
                        <li><ReactIcon className="icon"/></li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Home;