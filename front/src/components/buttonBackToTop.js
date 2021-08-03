import React from 'react';
import './styles/buttonBackToTop.css'
import { BiUpArrow } from 'react-icons/bi';


function buttonBackToTop() {
    return (
        <div className="back-to-top">
            <BiUpArrow className='arrow'/>
        </div>
    )
};
export default buttonBackToTop;