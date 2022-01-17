import React from 'react';

const CardJobsExtended = ({title, description}) => {
    return (
        <div className="card-jobs-ext">

            <div className="card-jobs-ext-title card-jobs-title">{title}</div>
            <div className="card-jobs-ext-description text-note">{description}</div>
        </div>
    );
};

export default CardJobsExtended;