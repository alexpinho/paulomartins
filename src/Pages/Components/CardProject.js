import React from 'react';

const CardProject = ({image, title, location}) => {
    return(
        <div className="card-project">
        <img src={image} className="card-project-img" alt="Project_Photo" />
        <div className="card-project-body">
            <div className="card-project-title">{title}</div>
            <div className="card-project-location">{location}</div>
        </div>
        </div>
    );


};

export default CardProject;