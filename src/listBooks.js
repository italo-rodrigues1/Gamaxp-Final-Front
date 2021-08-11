import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Backtotop from "./components/buttonBackToTop";
import FooterContato from "./components/footer";
import HeaderTopo from "./components/header";
import ModalLivro from "./components/modal";
// import Pagination from "./components/paginacao";
import "./styles/listBooks.css";
// import { AiFillInstagram } from "react-icons/ai";
// import { RiFacebookFill } from "react-icons/ri";
// import { AiOutlineTwitter } from "react-icons/ai";
import { api } from "./services/api";

// const api = 'https://gamaxpfinalapi.herokuapp.com/';

const LIMIT = 12;

const ListBooks = () => {
  const [offset, setOffset] = useState(0);
  const [livros, setItens] = useState([]);
  const [modalId, setModalId] = useState(false);
  
  const [image, setImagem] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [idade, setIdade] = useState(0);
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");

  const [ageFilter, setAgeFilter] = useState("");

 
  useEffect(() => {
    
    setItens({})
    api.get("/").then((res) => setItens(res.data));
  }, []);

  
  return (
    <div>
      <HeaderTopo />
      <div className="selecao-idade">
        <div className="title-selecao-livros">
          <h2>Descubra nossa seleção de livros por idade</h2>
        </div>
      </div>

      <div className="container-filter">
        <button onClick={() => setAgeFilter("0-1")}>bebês(até 1 ano)</button>
        <button onClick={() => setAgeFilter("2-3")}>2-3 anos</button>
        <button onClick={() => setAgeFilter("4-6")}>4-6 anos</button>
        <button onClick={() => setAgeFilter("7-10")}>7-10 anos</button>
        <button onClick={() => setAgeFilter("10+")}>10-13 anos</button>
        <button onClick={() => setAgeFilter()}>Todos</button>
      </div>

      {livros.data && !ageFilter && (
        <ul className="group-item">
          {livros.data.map((item) => {
            return (
              <>
                <li className="item" key={item.id}>
                  <img src={item.imagem} />
                  <div className="title-group-item">
                    <h2>{item.titulo}</h2>
                    <p>{item.descricao}</p>
                    <button
                      className="btn-group-item"
                      onClick={() => {
                        setModalId(!modalId);
                        setImagem(item.imagem);
                        setTitulo(item.titulo);
                        setIdade(item.idade);
                        setDescricao(item.descricao);
                        setAutor(item.autor);
                        setEditora(item.editora);
                      }}
                    >
                      Veja mais
                    </button>
                  </div>
                </li>
                <ModalLivro
                  isOpen={modalId}
                  onClickClose={() => setModalId(null)}
                >
                  <div className="title-modal">
                    <h2>{titulo}</h2>
                    <p>Recomendados para : {idade}</p>
                    <p>{descricao}</p>
                    <p>Autor: {autor}</p>
                    <p>Editora: {editora}</p>

                    {/* <div>
                      Redes Sociais
                      <Link to="#" className="link">
                        <AiFillInstagram />
                      </Link>
                      <Link to="#">
                        <RiFacebookFill />
                      </Link>
                      <Link to="#">
                        <AiOutlineTwitter />
                      </Link>
                    </div> */}
                  </div>
                  <div className="img-livro">
                    <img src={image} alt="capa do livro" />
                  </div>
                </ModalLivro>
              </>
            );
          })}
        </ul>
      )}
      {ageFilter !== "" && (
        <ul className="group-item">
          {livros.data.map((item) => {
            return (
              <>
                {ageFilter == item.idade && (
                  <li className="item" key={item.id}>
                    <img src={item.imagem} />
                    <div className="title-group-item">
                      <h2>{item.titulo}</h2>
                      <p>{item.descricao}</p>
                      <button
                        className="btn-group-item"
                        onClick={() => {
                          setModalId(!modalId);
                          setImagem(item.imagem);
                          setTitulo(item.titulo);
                          setIdade(item.idade);
                          setDescricao(item.descricao);
                          setAutor(item.autor);
                          setEditora(item.editora);
                        }}
                      >
                        Veja mais
                      </button>
                    </div>
                  </li>
                )}

                <ModalLivro
                  isOpen={modalId}
                  onClickClose={() => setModalId(null)}
                >
                  <div className="title-modal">
                    <h2>{titulo}</h2>
                    <p>Recomendados para : {idade}</p>
                    <p>{descricao}</p>
                    <p>Autor: {autor}</p>
                    <p>Editora: {editora}</p>

                    {/* <div>
                      Redes Sociais
                      <Link to="#" className="link">
                        <AiFillInstagram />
                      </Link>
                      <Link to="#">
                        <RiFacebookFill />
                      </Link>
                      <Link to="#">
                        <AiOutlineTwitter />
                      </Link>
                    </div> */}
                  </div>
                  <div className="img-livro">
                    <img src={image} alt="capa do livro" />
                  </div>
                </ModalLivro>
              </>
            );
          })}
        </ul>
      )}
{/* 
      {livros.count && (
        <Pagination
          limit={LIMIT}
          total={livros.count}
          offset={offset}
          setOffset={setOffset}
        />
      )} */}

      <FooterContato />
      <Backtotop />
    </div>
  );
};

export default ListBooks;
