import React, { useState, useEffect } from 'react';
import './eightBall.css';



export default function EightBall() { 
  const [ask, setAsk] = useState()
  
  const randomNumber = Math.floor(Math.random() * 8);
  
  let eightBall = '';
  
  switch(randomNumber) {
    case 0:
      eightBall = 'É certo';
      break;
    case 1:
      eightBall = 'É decididamente assim';
      break;
    case 2:
      eightBall = 'É definitivamente sim';
      break;
    case 3:
      eightBall = 'Não é possível prever agora';
      break;
    case 4:
      eightBall = 'Não conte com isso';
      break;
    case 5:
      eightBall = 'Minhas fontes dizem não';
      break;
    case 6:
      eightBall = 'A perspectiva não é tão boa';
      break;
    case 7:
      eightBall = 'Sinais apontam para sim';
      break;
  }
  
  // console.log(`A Bola 8 Mágica diz: ${eightBall}`)
   
  const [question, setQuestion] = useState();

  const toAsk = () => {
    if (ask === "") {
      alert("Por favor, digite uma pergunta!");
    } else {
      setQuestion(eightBall)
    }    
  } 

function gerarQuestion(ask) {
  if (ask === '') {
    return <div>{''}</div>    
}else {
  return <div className="textAsk">
          <span>Sua pergunta é: </span>
          <h4>{ask}?</h4> 
        </div>
} 
}

useEffect(() => {
  toAsk();
  setQuestion(ask);
}, []);

const reset = () => {
  setAsk('');
  setQuestion('');
}

  return (
    <div className="ContainerEightBall">
      <div className="boxBaseBall">
      <h1 className="pageTitleEight">BOLA 8</h1> <br/>
      <h1 className="pageTitleEight">Qual é o seu dilema?</h1> <br/>
      <h3 className="textLight">Digite sua pergunta e aperte o botão para saber a resposta!</h3> <br/>

      <div className="boxAnswer">
        <input
          className="inputItem" 
          type="text" 
          placeholder="Qual é a sua pergunta?"
          value={ask} 
          onChange={(e) => setAsk(e.target.value)}
        />
      </div>

    <div className='divA'>
      {gerarQuestion(ask)}
     </div>

    <div className="boxBtnAsk">
        <button 
          className="btnAsk" 
          onClick={toAsk}
          >
          Perguntar
        </button> 

        <button 
          className="btnZerar" 
          onClick={reset}
          >
          Limpar
        </button> 
    </div>

      <br/>

     <div className="boxAnswer"> 
        <h2 className="answer">A Bola 8 Mágica diz: </h2>
        <h2 className="answerTwo">{question}</h2>
      </div>
      </div>
    </div>
  )
}