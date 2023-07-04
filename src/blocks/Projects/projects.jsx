import React from 'react';
import './projects.scss';
import Container from "../../components/container/container";
import {ReactComponent as LinkToIcon} from "../../images/icons/link.svg";
import waweProjectCover from '../../images/projects/wawe.png';

const ProjectsData = [
    {
        image: waweProjectCover,
        title: "Wawe",
        text: "\"Wawe\" is a surfing school where you can learn how surf easily with the help of the top surfers in the world",
        linkToProject: "https://wawe-school.web.app/",
        linkToCode: "https://github.com/unnamed-ii/wawe",
    },
];

const Project = ({image, title, text, linkToProject, linkToCode}) => {
    return (
        <div className="project">
            <div className={"project__image" + (image === waweProjectCover ? " wawe" : "")}/>
            <div className="project__box">
                <div className="project__box-info">
                    <h1 className="project__box-info__title">{title}</h1>
                    <p className="project__box-info__text">{text}</p>
                </div>
                <ul className="project__box-links">
                    <li>
                        <a href={linkToProject}>
                            <LinkToIcon className="icon"/>
                            <h4>Go to "{title}"</h4>
                        </a>
                    </li>
                    <li>
                        <a href={linkToCode}>
                            <LinkToIcon className="icon"/>
                            <h4>Source code</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section className="projects" id="projects-section">
            <Container>
                {ProjectsData.length
                    ?
                    <div className="projects__inner">
                        <div className="projects__inner-title">
                            Projects I've done :
                        </div>
                        <div className="projects__inner-list">
                            {ProjectsData.map(project =>
                                <Project
                                    image={project.image}
                                    title={project.title}
                                    text={project.text}
                                    linkToProject={project.linkToProject}
                                    linkToCode={project.linkToCode}
                                />
                            )}
                        </div>
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