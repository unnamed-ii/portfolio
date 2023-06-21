import React from 'react';
import './projects.scss';
import Container from "../../components/container/container";

const ProjectsData = [];

const Project = ({image, title, text}) => {
    return (
        <div className="project">
            <img src={image} alt="ImageOfProject" className="project__image"/>
            <h1 className="project__title">{title}</h1>
            <p className="project__text">{text}</p>
        </div>
    )
}

const Projects = () => {
    return (
        <section className="projects">
            <Container>
                {ProjectsData.length
                    ?
                    <div className="projects__list">
                        {ProjectsData.map(project =>
                            <Project
                                image={project.images}
                                title={project.title}
                                text={project.text}
                            />
                        )}
                    </div>
                    :
                    <div className="projects__notfound">
                        New projects coming soon . . .
                    </div>}
            </Container>
        </section>
    );
};

export default Projects;