import React, { useEffect, useState } from "react";
import Backtotop from "./components/buttonBackToTop";
import FooterContato from "./components/footer";
import HeaderTopo from "./components/header";
import FiltroBtn from "./components/filtroBtn";
import ModalLivro from "./components/modal";
import Pagination from "./components/paginacao";
import "./styles/listBooks.css";
import { api } from "./services/api";


const LIMIT = 12;

const ListBooks = () => {
 
  const [offset, setOffset] = useState(0);
  const [livros, setItens] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => setItens(res.data));
  }, [offset]);

  // const livro = api.get("/");


  return (
    <div>
      <HeaderTopo />
      <div className="selecao-idade">
        <div className="title-selecao-livros">
          <h2>Encante-se com nossa seleção de livros por idade</h2>
        </div>
      </div>
      <FiltroBtn />

      {livros.data && (
        <ul className="group-item">
          {livros.data.map((item) => {
            return (
              <li className="item" key={item.id}>
                <img src={item.attributes.posterImage.small} width="40%" />
                <h2>{item.attributes.titles.en}</h2>
                <button>Veja mais</button>
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