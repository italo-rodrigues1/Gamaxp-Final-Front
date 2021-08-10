import React, { useEffect, useState } from "react";
import Backtotop from "./components/buttonBackToTop";
import FooterContato from "./components/footer";
import HeaderTopo from "./components/header";
import FiltroBtn from "./components/filtroBtn";
import ModalLivro from "./components/modal";
import Pagination from "./components/paginacao";
import "./styles/listBooks.css";
import qs from 'qs';
// import axios from 'axios';
import { api } from "./services/api";

// const api = 'https://gamaxpfinalapi.herokuapp.com/';

const LIMIT = 12;

const ListBooks = () => {

  const [offset, setOffset] = useState(0);
  const [livros, setItens] = useState([]);
  const [text, setText] = useState('');


  useEffect(() => {

     const query = ({
       
     })
     
    api.get("/").then((res) => setItens(res.data));


  }, []);

  const livro = api.get("/");
 


  return (
    <div>
      <HeaderTopo />
      <div className="selecao-idade">
        <div className="title-selecao-livros">
          <h2>Descubra nossa seleção de livros por idade</h2>
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
                <img src={item.imagem} width="40%" />
                <div className="title-group-item">
                  <h2>{item.titulo}</h2>
                  <p>{item.descricao}</p>
                  <button onClick={ModalLivro}>Veja mais</button>
                </div>
                
              </li>
            );
          })}
        </ul>
      )}



      {livros.count && (
            <Pagination
              limit={LIMIT}
              total={livros.count}
              offset={offset}
              setOffset={setOffset}
            />
      )}

      {/* {livros.data && (
        <ModalLivro />
      )} */}
      
      <FooterContato />
      <Backtotop />
    </div>
  );
};

export default ListBooks;