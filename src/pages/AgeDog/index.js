import React, { useEffect, useState } from 'react';
import './ageDog.css';


export default function Agedog() {

  const [namePet, setNamePet] = useState('');
  const [agePet, setAgePet] = useState('');
  const [resultado, setResultado] = useState ('');

  const CalcularAgeDog = () => {
    if (namePet === '') {
      alert("Por favor, Insira o nome de seu Pet!");
    }
    if (agePet === '') {
      alert("Por favor, Insira a idade de seu Pet!");
    }
    
    //Os primeiros dois anos de vida de um cão contam como a
    //proximadamente 10,5 anos cada.
    var earlyYears = 2;
    earlyYears *=9;

    // retirando os 2 anos da idade que foram calculados antes
    var laterYears = agePet - 2;

    //Multiplique a variável laterYears por 4 para calcular o
    //número de anos do cão contabilizados pelos seus últimos anos. 
    laterYears *= 5;

    //Adicione earlyYears e laterYears e armazene isso em uma 
    //variável chamada calcgAgeDog.
    
    const calcgAgeDog = earlyYears + laterYears;
    setResultado(calcgAgeDog);  
    classification();
  };

  const resultadoFinal = () => {

    if (resultado === '') {
        return <p></p>                            
    }else 
        return <p>{resultado + ' anos'}</p>                            
  }

  const reset = () => {
    setNamePet('');
    setAgePet('');
    setResultado('');
  }

  const classification = () => {
    var criança = (`Que máximo! O(a) ${namePet} ainda é uma criança arteira!`);
    var adolescente = (`Que maravilha! O(a) ${namePet} ainda é um adolescente!`);
    var jovem = (`Incrível! O(a) ${namePet} está na flor da idade!`);
    var maduro = (`Isso é bom! O(a) ${namePet} já é adulto(a)!`);
    var velho = (`Que pena! O(a) ${namePet} está ficando velhinho(a)!`);
    var bemVelho = (`Que pena! O(a) ${namePet} já é bem velhinho(a)!`); 
    var idoso = (`Que pena! O(a) ${namePet} já é bem idoso(a)!`); 

    if (resultado === '' || resultado == null) {
        return <div 
                style={{backgroundColor:"#f8e6e6"}} 
                className="aprovacaoPet">           
              </div>    
    } 
    else if (resultado >= 0 && resultado <= 14) {
      return <div 
                style={{backgroundColor:"#79ffa1"}} 
                 className="aprovacaoPet">
                {criança}
              </div>             
    }else if (resultado > 14 && resultado <= 20) {
        return <div 
                  style={{backgroundColor:"#009c2f"}} 
                   className="aprovacaoPet">
                  {adolescente}
                </div>             
    } else if (resultado > 20 && resultado <= 25){
        return <div 
                  style={{backgroundColor:"#0059ff"}} 
                   className="aprovacaoPet">
                  {jovem}
              </div>        
    } else if (resultado > 25 && resultado <= 45) {
      return <div
                style={{backgroundColor:"#fffb00"}} 
                 className="aprovacaoPet">
                {maduro}
              </div>             
  } else if (resultado > 45 && resultado <= 60) {
        return <div 
                  style={{backgroundColor:"#ffaa2b"}} 
                   className="aprovacaoPet">
                  {velho}
              </div>     
    }  else if (resultado > 60 && resultado <= 80) {
        return <div 
                  style={{backgroundColor:"#ff7300"}} 
                   className="aprovacaoPet">
                  {bemVelho}
              </div>    
    } else if (resultado > 80 && resultado <= 120) {
        return <div 
                  style={{backgroundColor:"#ff0000"}} 
                  className="aprovacaoPet">
                  {idoso}
                </div>       
    } else {
        return <div 
                style={{backgroundColor:"#f8e6e6"}} 
                className="aprovacaoPet">           
              </div>    
    }
}

  return ( 
    <div className="containerDog">
          <h1 className="pageTitleDog">
            Quantos Anos "Humanos" tem Seu Dog?</h1>
          <p className="pageSubtitleDog">
            Calcule a idade aproximada!
          </p>
          <img 
            src="https://meucaocompanheiro.com/blog/wp-content/uploads/2016/05/capa-video-facebook-3-770x340.png" 
            className="imgTitlleDog" 
          />
      
          <div className="boxAge">
            <label for="number">
              <h2>Insira os dados de Seu Pet:</h2>
            </label>
            <div className="nome">Qual é o nome dele(a)?
              <input 
                className="inputNameDog" 
                type="text" 
                value={namePet}
                onChange={(e) => {setNamePet(e.target.value)}}
              />
            </div>
            <div className="age">E a idade de dog é?
              <input 
                className="inputAgeDog" 
                type="number" 
                value={agePet}
                onChange={(e) => {setAgePet(e.target.value)}}
              />
            </div> 
           
            <div className="boxBtnAge">
            <button 
              className="btnCalcularAge" 
              type="submit" 
              onClick={CalcularAgeDog}>
                Calcular Idade
            </button>

            <button 
              className="btnZerarAge" 
              type="submit" 
              onClick={reset}>
                Apagar
            </button>
            </div>
            
          </div>
      
          <div className="resultadoPet">
            <h2>A idade "Humana" de seu Doguinho é:</h2>
            <div className="idade">{resultadoFinal()}</div>
            <div className="classificacaoPet">
              <h4>Classificação:</h4>
            </div>

            <div className="aprovacaoAgePet">
              {classification()}
            </div>
          </div>      
  </div>
  )
}