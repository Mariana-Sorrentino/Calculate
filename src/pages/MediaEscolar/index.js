import React, { useEffect, useState } from 'react';
import './mediaEscolar.css'

export default function MediaEscolar() {

  const [nome, setNome] = useState ('');
  const [notaOne, setNotaOne] = useState('');
  const [notaTwo, setNotaTwo] = useState('');
  const [notaThree, setNotaThree] = useState('');
  const [notaFour, setNotaFour] = useState('');
  const [resultado, setResultado] = useState('');

  const CalcMedia = () => {
    if (nome === '') {
      alert("Por favor, Insira seu nome!");
    }
    if (notaOne === '') {
      alert("Por favor, Insiraa nota do 1º Trimestre!");
    }
    if (notaTwo === '') {
      alert("Por favor, Insiraa nota do 2º Trimestre!");
    }
    if (notaThree === '') {
      alert("Por favor, Insiraa nota do 3º Trimestre!");
    }
    if (notaFour === '') {
      alert("Por favor, Insiraa nota do 4º Trimestre!");
    }

    const media = (notaOne + notaTwo + notaThree + notaFour) / 4;
    const mediaFixed = media.toFixed(1);
    setResultado(+mediaFixed);  
    classification();
  };

  useEffect(() => {
    classification();
    setResultado();
  }, []);

  const reset = () => {
    setNome('');
    setNotaOne('');
    setNotaTwo('');
    setNotaThree('');
    setNotaFour('');
    setResultado('');
  }

  const classification = () => {
    var aprovado = (`Parabéns, ${nome}. VOCÊ FOI APROVADO(A)!!`);
    var reprovado = (`Que pena, ${nome}. VOCÊ FOI REPROVADO(A)!!` );
   
    if (resultado === '') {
      return <div 
              style={{backgroundColor:"#cddddc"}} 
              className="aprovacao">           
            </div>    
  } else if (notaOne === '' || notaTwo === '' || notaThree === '' || notaFour === ''){
          return <div 
                    style={{backgroundColor:"#cddddc"}} 
                    className="aprovacao">
                </div>        
}else if (resultado >= 6){
      return <div 
                style={{backgroundColor:"#009c2f"}} 
                 className="aprovacao">
                {aprovado}
            </div>        
  }  else if (resultado <= 5) {
      return <div 
              style={{backgroundColor:"#ff0000"}} 
              className="aprovacao">
              {reprovado}
            </div>    
  } else {
      return <div 
              style={{backgroundColor:"#cddddc"}} 
              className="aprovacao">           
            </div>    
  }
}

  return (
    <div className="containerMedia">

      <div className="boxBaseMedia">
    
      <h1 className="pageTitleMedia">
        Calculadora de Média Escolar
      </h1>
      <h2 className="pageSubtitleMedia">
        Calcule sua média de notas!
      </h2>

    <div className="boxNotas">
      <label for="number">
        <h2 className="titleTable">Insira suas Notas:</h2>
      </label>

      <div className="nomeMedia"
        >Qual é seu nome?
        <input 
          className="inputNomeMedia" 
          type="text" 
          value={nome} 
          onChange={(e) => {setNome(e.target.value)}} 
        />
      </div>

      <div className="notas">
        Nota do 1º Trimestre:
        <input 
          className="inputNotasMedia" 
          type="number"
          placeholder="9,5" 
          value={notaOne} 
          onChange={(e) => {setNotaOne(+e.target.value)}} 
        />
      </div>

      <div className="notas">
        Nota do 2º Trimestre:
        <input 
          className="inputNotasMedia" 
          type="number" 
          placeholder="9,5" 
          value={notaTwo} 
          onChange={(e) => {setNotaTwo(+e.target.value)}} 
        />
      </div>

      <div className="notas">
        Nota do 3º Trimestre:
        <input 
          className="inputNotasMedia" 
          type="number"
          placeholder="9,5"  
          value={notaThree} 
          onChange={(e) => {setNotaThree(+e.target.value)}} 
        />
      </div> 

      <div className="notas">
        Nota do 4º Trimestre:
        <input 
          className="inputNotasMedia" 
          type="number" 
          placeholder="9,5" 
          value={notaFour} 
          onChange={(e) => {setNotaFour(+e.target.value)}} 
        />
      </div>
      
      <div className="boxBtnMedia">
        <button 
          className="btnMedia" 
          type="submit" 
          onClick={CalcMedia}>
            Calcular Média
        </button>

        <button 
          className="btnZerarMedia" 
          type="submit" 
         onClick={reset}>
            Apagar
        </button>
      </div>
      
    </div>

    <div className="resultadoMedia">
      <h2 className="titleTable">Sua nota final é:</h2>
      <div className="notaFinal">{resultado}</div>
      <div className="classificacaoMedia">
        <h4>classificação:</h4>
      </div>
      <div className="aprovacaoMedia">{classification()}</div>      
    </div>
    </div>
</div>
)
}