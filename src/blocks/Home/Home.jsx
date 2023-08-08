import React from 'react';
import './home.scss';
import Container from "../../components/container/container";
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
                        Isa Ingashev
                    </div>
                    <div className="home__info-block">
                        <p>
                            I'm frontend developer.
                        </p>
                        <p>
                            I ❤️ <b>JavaScript</b>, <b>ReactJS</b> and <b>UI design</b>.
                        </p>
                        <p className="links">
                            <a href="https://github.com/unnamed-ii">GitHub</a>
                            <a href="mailto:isaingashev@gmail.com">Email</a>
                            <a href="https://t.me/unnamedii">Telegram</a>
                            <a href="https://www.linkedin.com/in/isa-ingashev/">LinkedIn</a>
                            <a href="https://leetcode.com/unnamed-II/">LeetCode</a>
                        </p>
                    </div>
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