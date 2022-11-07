import React, { useState, useEffect } from 'react';
import './mentalista.css';


export default function Mentalista() {

  const [palpite, setPalpite] = useState ('');
  const [resultado, setResultado] = useState('');
  const [sorteio, setsorteio] = useState('');

  function hendleRand(){
    return parseInt(Math.floor(Math.random() * 10 + 1));
  }
//console.log(sorteio, 'sorte')

  useEffect(() => {
    hendleRand();
    setsorteio(hendleRand);
  }, []);
  

  const Chutar = () => {
    if (palpite === '') {
      alert("Por favor, Insira um palpite!");
    }

    const chute = parseInt(palpite);
    setResultado(chute)
    result();
    dicas();
  };

    const result = () => {
      var acertou = "Parabéns!! Você Acertou!";
      var errou = "Que pena... Você Errou!";
      var numeroFora = "Número inválido!! Por favor, digite um número de 0 a 10";     
      var parabens = "👏👏👏👏";

      if (resultado === '') {
        return <div></div>     
    }  else if (resultado === sorteio) {
        return <div 
                className="resultado"> 
                {acertou + parabens}          
              </div>     
    } else if (resultado < 0 || resultado > 10) {
        return <div 
                className="resultado"> 
                {numeroFora}                     
              </div>    
    } else {
      return <div 
      className="resultado"> 
      {errou}          
    </div>     
  } 
  };

  const dicas = () => {
    var menor = "DICA: Seu chute é MENOR que o Número Secreto";
    var maior = "DICA: Seu chute é MAIOR que o Número Secreto";

      if (resultado === '') {
        return <div></div>  
    }  else if (resultado < sorteio) {
        return <div 
                className="resultado"> 
                {menor}          
              </div>    
    } else if (resultado > sorteio) {
        return <div 
                className="resultado"> 
                {maior}          
              </div> 
    } else if (resultado === sorteio) {
        return <div></div>

     } else if (resultado < 0 || resultado > 10) {
      return <div></div> 

   }else {
        return <div></div>   
    } 
  };
 
    const reset = () => {
      setPalpite('');
      setsorteio('');
      setResultado('');
      hendleRand();
      setsorteio(hendleRand);
    };

  return (
    <div className="containerMentalista">
    <h1 className="titleMentalista">Mentalista - Adivinhe o Número Secreto</h1>
    <p className="subtitleMentalista">Digite um número de 0 a 10</p>
  
    <input 
      className="inputMentalista" 
      type="number" 
      value={palpite}
      onChange = {(e) => setPalpite(e.target.value)}
    />

    <div className="boxButtonMentalista">
    <button 
      className="btnChutar" 
      type="submit" 
      onClick={Chutar}>
        Chutar
    </button>
    <button 
      className="btnZerar" 
      type="submit" 
      onClick={reset}>
        Zerar
    </button>
    </div>
  
    <div className="boxResults">
      <div id="resultado">{result()}</div>
      <div id="dica">{dicas()}</div>
    </div>
  </div>
  )  
}