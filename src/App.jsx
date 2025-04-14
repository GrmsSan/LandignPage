import './App.css'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import { useState } from 'react';
import minhafoto from './assets/images/minhacara.jpg'


function App() {
 // const [mensagem, setMensagem] = useState('') 
  //const handleInputChange = (e) => {
  //  setMensagem = (e.target.value)
  //};
  return (
      <>
        <div className="header">
         <img src={minhafoto} alt="Minha foto" width="80px" height="auto"/>
       
        <div>
          <h1>Gustavo</h1>
          <h2>Juninho em surto</h2>
        </div>
        </div>
       
        <div className="Sobre mim">
          <h3>Sobre mim</h3>
          <p>I am  Gustavo, today i find me patience with this fuck of react</p>
        </div>
        <div className="Cursos">
        <h3>Cursos realizados</h3>
        <span>etc</span>
        <span>etc</span>
        <span>etc</span>
        <span>etc</span>
        </div>

        <div className="buttons">
          <div className="social">


          </div>
          <button>Contact me</button>
        </div>
        
      </>
  );
}; 
export default App;
