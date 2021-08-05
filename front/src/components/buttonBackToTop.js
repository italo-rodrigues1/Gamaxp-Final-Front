import React, { useEffect, useState } from 'react';
import './styles/buttonBackToTop.css'
import { BiUpArrow } from 'react-icons/bi';
import { useWindowScroll } from 'react-use'



const ButtonBackToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 100) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

    if (!visible) {
        return false;
    }

    return (
        <div className="back-to-top" onClick={scrollToTop}>
            <BiUpArrow className='arrow' />
        </div>
    )
};

export default ButtonBackToTop;
