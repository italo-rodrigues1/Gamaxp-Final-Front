import React, { useEffect, useState } from "react";
import Backtotop from "./components/buttonBackToTop";
import FooterContato from "./components/footer";
import HeaderTopo from "./components/header";
import FiltroBtn from "./components/filtroBtn";
import ModalLivro from "./components/modal";
import Pagination from "./components/paginacao";
import "./styles/listBooks.css";
import qs from 'qs';
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
// import axios from 'axios';
import { api } from "./services/api";

// const api = 'https://gamaxpfinalapi.herokuapp.com/';

const LIMIT = 12;

const ListBooks = () => {

  const [offset, setOffset] = useState(0);
  const [livros, setItens] = useState([]);
  // const [text, setText] = useState('');
  const [filteredPolls, setfilteredLivros] = useState(null)
  const [modalId, setModalId] = useState(null);

  useEffect(() => {

    setItens({})

    api.get("/").then((res) => setItens(res.data))

   

  }, []);

  const livro = api.get("/");



  // if(livros){
    

  //   var A = livros.data.idade.filter(e => e.type === "0-1")
  //   var B = livros.data.idade.filter(e => e.type === "2-3")
  //   var C = livros.data.idade.filter(e => e.type === "4-6")    
  //   var D = livros.data.idade.filter(e => e.type === "7-10")  
  //   var E = livros.data.idade.filter(e => e.type === "10+")  
  // }
  
  // function showA() {
  //   setfilteredLivros(A)
  // }
  
  // function showB() {
  //   setfilteredLivros(B)
  // }
  
  // function showC() {
  //   setfilteredLivros(C)
  // }

  // function showD() {
  //   setfilteredLivros(D)
  // }

  // function showE() {
  //   setfilteredLivros(E)
  // }


  return (
    <div>
      <HeaderTopo />
      <div className="selecao-idade">
        <div className="title-selecao-livros">
          <h2>Descubra nossa seleção de livros por idade</h2>
        </div>
      </div>

    
     
        <div className="container-filter">
          <button  >bebês(até 1 ano)</button>
          <button  >2-3 anos</button>
          <button >4-6 anos</button>
          <button  >7-10 anos</button>
          <button   >10-13 anos</button>

          {/* <button onClick={() => showA()} >bebês(até 1 ano)</button>
          <button  onClick={() => showB()} >2-3 anos</button>
          <button  onClick={() => showC()}>4-6 anos</button>
          <button onClick={() => showD()} >7-10 anos</button>
          <button onClick={() => showE()}  >10-13 anos</button> */}
        </div>
    

      {livros.data && (
        <ul className="group-item">
          {livros.data.map((item) => {
            return (
              <li className="item" key={item.id}>
                <img src={item.imagem} />
                <div className="title-group-item">
                  <h2>{item.titulo}</h2>
                  <p>{item.descricao}</p>
                  <button className="btn-group-item" onClick={() => setModalId(item.id)}>Veja mais</button>
                </div>
             
                <ModalLivro isOpen={Boolean(modalId)} onClickClose={() => setModalId(null)}>
                  <div className='title-modal'>
                    <h2>{item.titulo}</h2>
                    <p>{item.descricao}</p>
                    <p>{item.titulo}</p>
                    <p>{item.idade}</p>
                    <div>
                        Redes Sociais
                        <a href='#'><AiFillInstagram /></a>
                        <a href='#'><RiFacebookFill /></a>
                        <a href='#'><AiOutlineTwitter /></a>
                    </div>
                  </div>
                  <div className='img-livro'>
                    <img src={item.imagem} alt='capa do livro'/>
                  </div>
               </ModalLivro> 
     
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
       
      
      <FooterContato />
      <Backtotop />
    </div>
  );
};

export default ListBooks;