import React from 'react'


function CardJobsPopup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner text-note'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>x</button>
                {props.children}
            </div>
        </div>
    ) : "";
}



export default CardJobsPopup
