import React from 'react'
import {motion} from "framer-motion";


function CardJobsPopup(props) {
    return (props.trigger) ? (
        <motion.div className='popup' initial={{opacity:0, scale:0.7,borderRadius:0}} animate={{opacity:["0%", "50%", "100%"], scale:1,
            borderRadius: ["30%", "30%", "0%"]}} transition={{duration: 0.4}}>
            <div className='popup-inner text-note'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>x</button>
                {props.children}
            </div>
        </motion.div>
    ) : "";
}



export default CardJobsPopup
