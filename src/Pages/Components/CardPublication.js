import React from 'react';

const CardPublication = ({image, title, local, date}) => {
    return(
        <div className="card-publication col-xs-3">
            <img src={image} className="card-publication-img" alt="Publication_Photo" />
            <div className="card-publication-body">
                <div className="card-publication-title text">{title}</div>
                <div className="card-publication-local text-note">{local}</div>
                <div className="card-publication-date text-note">{date}</div>
            </div>
        </div>
    );
};

export default CardPublication;