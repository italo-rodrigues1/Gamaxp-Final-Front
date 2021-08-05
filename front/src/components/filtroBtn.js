import React from 'react';
import './styles/filtroBtn.css'
// import passarinho from '../img/passarinho.png'

const FiltroBtn = () => {
    return (
        <div className="filtro-btn">
            <button>
                Bebês (até 1 ano)
                {/* <img src={passarinho} alt='bebês até 1 ano' /> */}
            </button>
            <button>
                2-3 anos
                {/* <img src={passarinho} alt='2 a 3 anos' /> */}
            </button>
            <button>
                4-6 anos
                {/* <img src={passarinho} alt='4 a 6 anos' /> */}
            </button>
            <button>
                7-10 anos
                {/* <img src={passarinho} alt='7 a 10 anos' /> */}
            </button>
            <button>
                10-13 anos
                {/* <img src={passarinho} alt='10 a 13 anos' /> */}
            </button>
        </div>
    )
};

export default FiltroBtn;