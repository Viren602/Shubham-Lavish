import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectBox = ({ title, description, imageSrc, alt, url }) => {
    return (
        <div className="project-box">
            <div className="project-img">
                <img src={imageSrc} alt={alt} title={title} />
            </div>
            <div className="project-text">
                <h2>{title}</h2>
                <p>{description}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="prm-btn"
                >
                    Visit site <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </div>
    );
};

export default ProjectBox;
