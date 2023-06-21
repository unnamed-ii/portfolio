import React from 'react';
import './links.scss';
import {ReactComponent as LinkedInIcon} from "../../images/icons/linkedin.svg";
import {ReactComponent as GitHubIcon} from "../../images/icons/github.svg";
import {ReactComponent as LeetCodeIcon} from "../../images/icons/leetcode.svg";
import {ReactComponent as CodeWarsIcon} from "../../images/icons/codewars-red.svg";

const Links = ({children}) => {
    return (
        <ul className="home__info-links">
            <li><a href="https://www.linkedin.com/in/isa-ingashev"><LinkedInIcon className="icon link"/></a></li>
            <li><a href="https://github.com/unnamed-ii"><GitHubIcon className="icon link"/></a></li>
            <li><a href="https://leetcode.com/unnamed-II/"><LeetCodeIcon className="icon" link/></a></li>
            <li><a href="https://www.codewars.com/users/unnamed-ii"><CodeWarsIcon className="icon link"/></a></li>
        </ul>
    );
};

export default Links;