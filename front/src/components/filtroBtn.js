import React, { useState } from 'react';
import './styles/filtroBtn.css'
import useDebounce from './useDebounce';

const FiltroBtn = ({value}) => {
    // const [displayValue, setDisplayValue] = useState(value);
    // const debouncedChange = useDebounce(onChange, 500);

    // function handleChange(event) {
    //     setDisplayValue(event.target.value);
    //     debouncedChange(event.target.value);
    // }

    const [displayValue, setDisplayValue] = useState(value);
        
    return (

        <div className="filtro-btn">
            <button
                type="search"
                value={displayValue}
                // onChange={handleChange}
            >

            </button>
        </div>













        // <div className="filtro-btn">
        //     <button>
        //         Bebês (até 1 ano)
        //         {/* <img src={passarinho} alt='bebês até 1 ano' /> */}
        //     </button>
        //     <button>
        //         2-3 anos
        //         {/* <img src={passarinho} alt='2 a 3 anos' /> */}
        //     </button>
        //     <button>
        //         4-6 anos
        //         {/* <img src={passarinho} alt='4 a 6 anos' /> */}
        //     </button>
        //     <button>
        //         7-10 anos
        //         {/* <img src={passarinho} alt='7 a 10 anos' /> */}
        //     </button>
        //     <button>
        //         10-13 anos
        //         {/* <img src={passarinho} alt='10 a 13 anos' /> */}
        //     </button>
        // </div>
    )
};

export default FiltroBtn;