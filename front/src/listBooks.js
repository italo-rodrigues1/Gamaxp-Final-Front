import React, { useEffect, useState } from "react";
import Backtotop from "./components/buttonBackToTop";
import FooterContato from "./components/footer";
import HeaderTopo from "./components/header";
import FiltroBtn from "./components/filtroBtn";
import ModalLivro from "./components/modal";
import Pagination from "./components/paginacao";
import "./styles/listBooks.css";
import qs from 'qs';
import axios from 'axios';

const api = 'https://kitsu.io/api/edge/';

const LIMIT = 12;

const ListBooks = () => {
  const [offset, setOffset] = useState(0);
  const [livros, setItens] = useState([]);
  const [text, setText] = useState('');
  

 

  useEffect(() => {
    
    
    setItens({})

    const query = {
      page: {
        limit: LIMIT,
        offset
      }
    };

    if (text) {
      query.filter = {
        text
      };
    }
    
    fetch(`${api}anime?${qs.stringify(query)}`)
    .then((response) => response.json())
    .then((response) => {
      setItens(response);
    });

   

  }, [text, offset]);


  return (
    <div>
      <HeaderTopo />
      <div className="selecao-idade">
        <div className="title-selecao-livros">
          <h2>Encante-se com nossa seleção de livros por idade</h2>
        </div>
      </div>

      <FiltroBtn 
        value={text}
        onChange={(search) => setText(search)}
      />
      

      {livros.data && (
        <ul className="group-item">
          {livros.data.map((item) => {
            return (
              <li className="item" key={item.id}>
                <img src={item.attributes.posterImage.small} width="40%" />
                <h2>{item.attributes.titles.en}</h2>
                <button onclick={ModalLivro}>Veja mais</button>
              </li>
            );
          })}
        </ul>
      )}



      {livros.meta && (
            <Pagination
              limit={LIMIT}
              total={livros.meta.count}
              offset={offset}
              setOffset={setOffset}
            />
      )}
      <FooterContato />
      <Backtotop />
    </div>
  );
};

export default ListBooks;