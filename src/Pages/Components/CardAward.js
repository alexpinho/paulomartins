import React from 'react';

const CardAward = ({image, title, date}) => {
    return(
        <div className="card-award col-xs-3">
            <img src={image} className="card-award-img" alt="Award_Photo" />
            <div className="card-award-body">
                <div className="card-award-title text">{title}</div>
                <div className="card-award-date text-note">{date}</div>
            </div>
        </div>
    );
};

export default CardAward;