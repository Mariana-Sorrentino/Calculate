import React, { useState } from 'react';
import './termometricas.css';

export default function Termometricas() {

  const [ceusiusK, setCeusiusK] = useState('');
  const [resultCeusiusK, setResultCeusiusK] = useState('');

  const [kelvinC, setKelvinC] = useState('');
  const [resultKelvinC, setResultKelvinC] = useState('');

  const [ceusiusF, setCeusiusF] = useState('');
  const [resultCeusiusF, setResultCeusiusF] = useState('');

  const [fahrenheitC, setFahrenheitC] = useState('');
  const [resultFahrenheitC, setResultFahrenheitC] = useState('');

  const [kelvinF, setKelvinF] = useState('');
  const [resultKelvinF, setResultKelvinF] = useState('');

  const [fahrenheitK, setFahrenheitK] = useState('');
  const [resultFahrenheitK, setResultFahrenheitK] = useState('');


//CONVERTER CEULIUS PARA KELVIN
  const CeusiusToKelvin = () => {
    if (ceusiusK === '') {
      alert("Por favor, insira o valor em Ceusius (ºC) para ser convertido!");
      setResultCeusiusK = null;
    }else {
      const convertCeusiusK = ceusiusK + 273;
      const resultCeusiusK = convertCeusiusK.toFixed(1);
      setResultCeusiusK(+resultCeusiusK);
    } 
  };

  const FinalceusiusK = () => {

    if (resultCeusiusK === '') {
        return <div></div>                            
    }else 
        return <div>{resultCeusiusK + ' K'}</div>                            
  }

  const resetCeusiusK = () => {
    setCeusiusK('');
    setResultCeusiusK('');
  }


  //CONVERTER KELVIN PARA CEUSIUS
  const KelvinToCeusius = () => {
    if (kelvinC == '') {
      alert("Por favor, insira o valor em Kelvin (K) para ser convertido!");
      setResultKelvinC = null;
    }else{
      const convertKelvinC = kelvinC - 273;
      const resultKelvinC = convertKelvinC.toFixed(1);
      setResultKelvinC(+resultKelvinC); 
    }   
  }

  const FinalKelvinC = () => {

    if (resultKelvinC === '') {
        return <div></div>                            
    }else 
        return <div>{resultKelvinC + ' ºC'}</div>                            
  }

  const resetKelvinC = () => {
    setKelvinC('');
    setResultKelvinC('');
  }


    //CONVERTER CEUSIUS PARA FAHRENHEIT
  const CeusiusToFahrenheit = () => {
    if (ceusiusF === '') {
      alert("Por favor, insira o valor em Ceusius (ºC) para ser convertido!");
      setResultKelvinC = null;
    } else {
      const convertCeusiusF = ceusiusF * 1.8 + 32;
      const resultCeusiusF = convertCeusiusF.toFixed(1);
      setResultCeusiusF(+resultCeusiusF);
    }   
  };

  const FinalCeusiusC = () => {

    if (resultCeusiusF === '') {
        return <div></div>                            
    }else 
        return <div>{resultCeusiusF + ' ºF'}</div>                            
  }

  const resetCeusiusF = () => {
    setCeusiusF('');
    setResultCeusiusF('');
  }


  //CONVERTER FAHRENHEIT PARA CEUSIUS
  const FahrenheitToCeusius = () => {
    if (fahrenheitC === '') {
      alert("Por favor, insira o valor em Fahrenheit (ºF) para ser convertido!");
      setResultFahrenheitC = null;
    } else {
      const convertFahrenheitC = ((fahrenheitC - 32) / 1.8);
      const resultFahrenheitC = convertFahrenheitC.toFixed(1);
      setResultFahrenheitC(+resultFahrenheitC);
    }
  };

  const FinalFahrenheitC = () => {

    if (resultFahrenheitC === '') {
        return <div></div>                            
    }else 
        return <div>{resultFahrenheitC + ' ºC'}</div>                            
  }
  
  const  resetFahrenheitC = () => {
    setFahrenheitC('');
    setResultFahrenheitC('');
  }


  //CONVERTER KELVIN PARA FAHRENHEIT
  const KelvinToFahrenheit = () => {
    if (kelvinF === '') {
      alert("Por favor, insira o valor em Kelvin (K) para ser convertido!");
      setResultKelvinF = null;
    } else {
      const convertKelvinF = ((kelvinF - 273) * 1.8) +32;
    const resultKelvinF = convertKelvinF.toFixed(1);
    setResultKelvinF(+resultKelvinF);
    }
  }

  const FinalKelvinF = () => {

    if (resultKelvinF === '') {
        return <div></div>                            
    }else 
        return <div>{resultKelvinF + ' ºF'}</div>                            
  }

  const resetKelvinF = () => {
    setKelvinF('');
    setResultKelvinF('');
  }


  //CONVERTER FAHRENHEIT PARA KELVIN
  const FahrenheitToKelvin = () => {
    if (fahrenheitK === '') {
      alert("Por favor, insira o valor em Fahrenheit (ºF) para ser convertido!");
      setResultFahrenheitK = null;
    } else{
      const convertFahrenheitK = (((fahrenheitK - 32) * 5) / 9) + 273;
      const resultFahrenheitK = convertFahrenheitK.toFixed(1);
      setResultFahrenheitK(+resultFahrenheitK);
    }
  };

  const FinalFahrenheitK = () => {

    if (resultFahrenheitK === '') {
        return <div></div>                            
    }else 
        return <div>{resultFahrenheitK + ' K'}</div>                            
  }

  const  resetFahrenheitK = () => {
    setFahrenheitK('');
    setResultFahrenheitK('');
  }

  return (
    <div className="containerTermometricas">
      <div className="boxBaseTermo">
       <div className="boxTitle">
        <h1 className="pageTitleTermo">
            Conversão de Escalas Termométricas
          </h1>
          <p className="pageSubtitleTermo">
            Conversor de temperaturas entre Farenheit, Kelvin e Celsius
          </p>   
        </div>     
      
        <div className="boxConversor">
      
          <div className="conversor">
            <label className="labelTermo" for="number">
              <h4 className="titleTemp">Celsius para Kelvin</h4>
            </label>
            <input 
              className="inputTermo" 
              type="number"
              placeholder="Insira a temperatura em Celsius (ºc)"
              value={ceusiusK}
              onChange={(e) => setCeusiusK(+e.target.value)}
            />
            <div className="boxBtnTermo">
              <button 
                className="btnTermo" 
                type="submit"
                onClick={CeusiusToKelvin}
              >
                  Converter 
              </button>

              <button 
                className="btnZerarTermo" 
                type="submit" 
                onClick={resetCeusiusK}
              >
                  Zerar
              </button>
            </div>
 
            <div className="resultsTermo">Resultado em Kelvin (K):</div>
            <div className="valorConvertido">{FinalceusiusK()}</div>
          </div>
      
          <div className="conversorTwo">
            <label  className="labelTermo"  for="number">
              <h4 className="titleTemp">Kelvin para Celsius</h4>
            </label>
            <input 
              className="inputTermo" 
              type="number" 
              placeholder="Insira a temperatura em Kelvin (k)"
              value={kelvinC}
              onChange={(e) => setKelvinC(+e.target.value)}
            />
             <div className="boxBtnTermo">
              <button 
                className="btnTermo" 
                type="submit" 
                onClick={KelvinToCeusius}
              >
                  Converter
              </button>

              <button 
                className="btnZerarTermo" 
                type="submit" 
                onClick={resetKelvinC}
              >
                  Zerar
              </button>
            </div>
            <div className="resultsTermo">Resultado em Celsius (ºC):</div>
            <div className="valorConvertido" i>{FinalKelvinC()}</div>
          </div>
      
        </div>
      
        <div className="boxConversor">
      
          <div className="conversor">
            <label  className="labelTermo"  for="number">
              <h4 className="titleTemp">Celsius para Fahrenheit</h4>
            </label>
            <input 
              className="inputTermo" 
              type="number" 
              placeholder="Insira a temperatura em Celsius (ºc)" 
              value={ceusiusF}
              onChange={(e) => setCeusiusF(+e.target.value)}
            />
             <div className="boxBtnTermo">
              <button 
                className="btnTermo" 
                type="submit" 
                onClick={CeusiusToFahrenheit}
              >
                  Converter
              </button>

              <button 
                className="btnZerarTermo" 
                type="submit" 
                onClick={resetCeusiusF}
              >
                  Zerar
              </button>
            </div>
            <div className="resultsTermo">Resultado em Fahrenheit (ºF):</div>
            <div className="valorConvertido">{FinalCeusiusC()}</div>
          </div>
      
          <div className="conversorTwo">
            <label  className="labelTermo"  for="number">
              <h4 className="titleTemp">Fahrenheit para Celsius</h4>
            </label>
            <input 
              className="inputTermo" 
              type="number" 
              placeholder="Insira a temperatura em Fahrenheit (ºF)"
              value={fahrenheitC} 
              onChange={(e) => setFahrenheitC(+e.target.value)} 
            />
             <div className="boxBtnTermo">
              <button 
                className="btnTermo" 
                type="submit" 
                onClick={FahrenheitToCeusius}
              >
                  Converter
              </button>

              <button 
                className="btnZerarTermo" 
                type="submit" 
                onClick={resetFahrenheitC}
              >
                  Zerar
              </button>
            </div>
            <div className="resultsTermo">Resultado em Celsius (ºC):</div>
            <div className="valorConvertido">{FinalFahrenheitC()}</div>
          </div>
      
        </div>
      
        <div className="boxConversor">
      
          <div className="conversor">
            <label  className="labelTermo"  for="moeda">
              <h4 className="titleTemp">Kelvin para Fahrenheit</h4>
            </label>
            <input 
              className="inputTermo" 
              type="number" 
              placeholder="Insira a temperatura em Kelvin (k)"
              value={kelvinF}
              onChange={(e) => setKelvinF(+e.target.value)}
            />
            <div className="boxBtnTermo">
              <button 
                className="btnTermo" 
                type="submit" 
                onClick={KelvinToFahrenheit}
              >
                  Converter
              </button>

              <button 
                className="btnZerarTermo" 
                type="submit" 
                onClick={resetKelvinF}
              >
                  Zerar
              </button>
            </div>
            <div className="resultsTermo">Resultado em Fahrenheit (ºF):</div>
            <div className="valorConvertido" >{FinalKelvinF ()}</div>
          </div>
      
          <div className="conversorTwo">
            <label  className="labelTermo"  for="moeda">
              <h4 className="titleTemp">Fahrenheit para Kelvin</h4>
            </label>
            <input 
              className="inputTermo" 
              type="number" 
              placeholder="Insira a temperatura em Fahrenheit (ºF)"
              value={fahrenheitK}
              onChange={(e) => setFahrenheitK(+e.target.value)}
            />
            <div className="boxBtnTermo">
              <button 
                className="btnTermo" 
                type="submit" 
                onClick={FahrenheitToKelvin}
              >
                  Converter
              </button>

              <button 
                className="btnZerarTermo" 
                type="submit" 
                onClick={resetFahrenheitK}
              >
                  Zerar
              </button>              
            </div>
            
            <div className="resultsTermo">Resultado em Kelvin (K):</div>
            <div className="valorConvertido">{FinalFahrenheitK()}</div>
          </div>
      
        </div>
        </div>
      </div>    
  )
}