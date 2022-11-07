import React, { useEffect, useState } from 'react';
import './imc.css';

 export default function IMC() { 

  const [nome, setNome] = useState('');  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState(''); 
  const [resultado, setResultado] = useState('');
  const [isDisabled, setIsDisabled] = useState(true); 

  const CalculaImc = () => {
    if (nome === '') {
      alert("Por favor, Insira seu nome!");
    }
    if (peso <= 0) {
      alert("Por favor, Insira um peso válido!");
    }
    if (altura <= 0) {
      alert("Por favor, Insira uma altura válida!");
    }
    const imc = peso / (altura * altura);
    const resultImc = imc.toFixed(2);
    setResultado(+resultImc);  
    classification();

  };

  const reset = () => {
    setNome('');
    setPeso('');
    setAltura('');
    setResultado('');
  }

  useEffect(() => {
    if (peso > 0 && altura > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true)
    }
  }, [peso, altura]);


  const classification = () => {
        var MuitoMaixo = (`Cuidado, ${nome}. Você está muito abaixo do peso!`);
        var baixo = (`Cuidado, ${nome}. Você está abaixo do peso!`);
        var normal = (`Incrível, ${nome}. Você está com peso ideal!` );
        var sobrepeso = (`Cuidado, ${nome}. Você está acima do peso!`);
        var obesidadeI = (`Cuidado, ${nome}. Você está com Obesidade I!`); 
        var obesidadeII = (`Cuidado, ${nome}. Você está com Obesidade II!`); 
        var obesidadeIII = (`Cuidado, ${nome}. Você está com Obesidade III!`);  
    
        if (resultado >= 0 && resultado <= 5.5) {
            return <div 
                    style={{backgroundColor:"#ebe8e8"}} 
                    className="aprovacao">           
                  </div>    
        } else if (resultado > 5.5 && resultado <= 17) {
            return <div 
                      style={{backgroundColor:"#79ffa1"}} 
                       className="aprovacao">
                      {MuitoMaixo}
                    </div>              
        } else if (resultado > 17 && resultado <= 18.49){
            return <div 
                      style={{backgroundColor:"#009c2f"}} 
                       className="aprovacao">
                      {baixo}
                  </div>        
        } else if (resultado >= 18.5 && resultado <= 24.99) {
          return <div 
                    style={{backgroundColor:"#0059ff"}} 
                     className="aprovacao">
                    {normal}
                  </div>             
      } else if (resultado >= 25.00 && resultado <= 29.99) {
            return <div 
                      style={{backgroundColor:"#fffb00"}} 
                       className="aprovacao">
                      {sobrepeso}
                  </div>     
        }  else if (resultado >= 30.00 && resultado <= 34.99) {
            return <div 
                      style={{backgroundColor:"#ffaa2b"}} 
                       className="aprovacao">
                      {obesidadeI}
                  </div>    
        } else if (resultado >= 35.00 && resultado <= 39.99) {
            return <div 
                      style={{backgroundColor:"#ff7300"}} 
                      className="aprovacao">
                      {obesidadeII}
                    </div>    
        } else if (resultado >= 40.00) {
            return <div 
                    style={{backgroundColor:"#ff0000"}} 
                    className="aprovacao">
                    {obesidadeIII}
                  </div>    
        } else {
            return <div 
                    style={{backgroundColor:"#ebe8e8"}} 
                    className="aprovacao">           
                  </div>    
        }
  }
        

  return (
    <div className='app'> 
      <div className="containerIMC">   
        <h1 className='pageTitleIMC'>Calcule seu IMC</h1>

        <div className="goupContainer">                
          <div className="boxItens">
            <img className="imgTitlle" src="https://sp.unifesp.br/biofisica/images/CSP/USER/imagens/imc2.png" />
            <img className="imgTitlleMobile" src="https://static.wixstatic.com/media/8dee4d_98511fffbd22456ea0d89df1325b4c4a~mv2.png/v1/fit/w_425%2Ch_308%2Cal_c/file.png" /> 
          </div>
              
              <div className="boxItens">
                <div className="boxInfo">
                  <label for="text">
                    <h2>Insira Seus Dados</h2>                      
                    <div className="nome">Qual é o Seu Nome? 
                        <input 
                          type="text"  
                          size="2" 
                          value={nome} 
                          onChange={(e) => {setNome(e.target.value)}} 
                        />
                      </div>
                      <div className="valor">Qual é seu Peso (Em Kg)? 
                        <input 
                          type="number" 
                          size="2" 
                          value={peso}
                          placeholder={"Ex.: 70"}  
                          onChange = {(e) => setPeso(+e.target.value)}
                        />   
                      </div>
                      <div className="valor">Qual é a sua Altura (Em Metro)? 
                        <input 
                          type="number" 
                          size="2" 
                          value={altura}
                          placeholder={"Ex.: 1,65"} 
                          onChange={(e) => setAltura(+e.target.value)} 
                        />    
                      </div>
                  </label>

                  <div className="boxBtnImc">
                    <button 
                      isDisabled={isDisabled}
                      className="btnImc"  
                      onClick={CalculaImc}
                    >
                      Calcular IMC
                    </button>  

                    <button 
                      className="btnZerarImc"  
                      onClick={reset}
                    >
                      Zerar
                    </button>        
                  </div>              
                </div>
                    
                <div className="resultadoImc">
                    <h2>Seu Índice de Massa Corporal (IMC) é: </h2>
                    <div className="idadeImc">{resultado}</div>
                    <div className="classificacaoImc">
                      <h2>Classificação:</h2>
                    </div>

                  <div id="classification">                     
                    {classification()}
                  </div>
                </div>          
              </div>
          </div>
            
        </div>    

      </div>
  )
}