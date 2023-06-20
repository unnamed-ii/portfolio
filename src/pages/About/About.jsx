import React from 'react';
import './about.scss';
import AboutImg from '../../images/about.jpg'

const About = () => {
    return (
        <section className="about">
            <img src={AboutImg} alt="image" className="about__image"/>
            <div className="about__info">
                <div className="about__info-headline">
                    About me
                </div>
                <div className="about__info-title">
                    A dedicated Front-end Developer
                    based in İzmir, Türkiye📍
                </div>
                <div className="about__info-text">
                    As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript,
                    React and SCSS. I excel in designing and maintaining responsive websites that offer a
                    smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing
                    clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a
                    team player who thrives in collaborating with cross-functional teams to produce outstanding web
                    applications.
                </div>
            </div>
        </section>
    );
};

export default About;