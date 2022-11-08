import React, { useEffect, useState } from 'react';
import './Moedas.css';

export default function Moedas() {

  const [valueDollar, setValueDollar] = useState('');  
  const [valueToConvertDollar, setValueToConvertDollar] = useState('');
  const [resultadoDollar, setResultadoDollar] = useState('');

  const [valueEuro, setValueEuro] = useState('');
  const [valueToConvertEuro, setValueToConvertEuro] = useState(''); 
  const [resultadoEuro, setResultadoEuro] = useState('');

  const [isDisabled, setIsDisabled] = useState(true); 

  const DollarConvert = () => {
    if (valueDollar === '' && valueDollar <= 0) {
      alert("Por favor, insira o valor do Dólar hoje!");
    }
    if (valueToConvertDollar === '' && valueToConvertDollar <= 0) {
      alert("Por favor, Insira o valor que deseja converter para Dólar!");
    }
 
    const converterDollar = valueDollar * valueToConvertDollar;
    const resultConverterDollar = converterDollar.toFixed(2);
    setResultadoDollar(resultConverterDollar);
  
  };

  const EuroConvert = () => {
    if (valueEuro === '' && valueEuro <= 0) {
      alert("Por favor, insira o valor do Euro hoje!");
    }
    if (valueToConvertEuro === '' && valueToConvertEuro <= 0) {
      alert("Por favor, Insira o valor que deseja converter para Euro!");
    }

    const converterEuro = valueEuro * valueToConvertEuro;
    const resultConverterEuro = converterEuro.toFixed(2);
    setResultadoEuro(resultConverterEuro);
  
  };

  const reset = () => {
    setValueDollar('');
    setValueToConvertDollar('');
    setResultadoDollar('');
  }

  const resetTwo = () => {
    setValueEuro('');
    setValueToConvertEuro('');
    setResultadoEuro('');
  }

  useEffect(() => {
    if (valueDollar > 0 && valueToConvertDollar > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [valueDollar, valueToConvertDollar]);

  useEffect(() => {
    if (valueEuro > 0 && valueToConvertEuro > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [valueEuro, valueToConvertEuro]);



  return (
    <div  className='app'>
      <div className="containerMoedas">
        <div className="boxBaseMoeda">
            <h1 className="pageTitle">
              Conversor de moedas
            </h1>
            <h2 className="pageSubtitleMoedas">
              Converta os valores para Real R$
            </h2>
                       
            <div className="boxConversorMoedas">
              
               <div className="conversorMoedas">
                 <div className="valorMoeda"> 
                    <h4 className="MoedaHoje">Insira o valor do Dólar (US$) hoje:</h4>                    
                    <label className="labelMoedas" for="moeda"></label>

                    <div className="boxSectionTop">
                      <input 
                        className="MoedasInput" 
                        type="number"
                        size="2" 
                        value={valueDollar}
                        onChange={(e) => setValueDollar(e.target.value)} 
                      />
                      <a href='https://bit.ly/3fsHWPq' target="_blank">
                        <button 
                          className="buttonMoeda" 
                          type="submit" 
                        >
                            Valor do Dólar Hoje
                        </button>
                      </a> 
                    </div>
                 </div>

                 <div className="valorMoeda"> 
                    <h4 className="MoedaHoje">Insira o valor em Dólar (US$) que deseja converter:</h4>
                    <label className="labelMoedas"  for="moeda"></label>
                    <input 
                      className="MoedasInput" 
                      type="number"
                      size="2" 
                      value={valueToConvertDollar}
                      onChange={(e) => setValueToConvertDollar(e.target.value)} 
                    />
                </div>
                 
                  <div className="boxSection">
                    <button 
                      className="buttonConvert" 
                      type="submit"
                      isDisabled={isDisabled} 
                      onClick={DollarConvert}>
                        Converter
                    </button>

                    <button 
                      className="btnZerarMoeda"  
                      onClick={reset}
                    >
                      Zerar
                    </button>   
                  </div>
                  
                 <div className="results">O Valor em Real é R$:</div>
                  <div className="valorConvertidoMoeda">R$ {resultadoDollar}</div>
                </div>


                <div className="conversorMoedasTwo">
                  <div className="valorMoeda"> 
                     <h4 className="MoedaHoje">Insira o valor do Euro (€) hoje:</h4>
                     <label className="labelMoedas"  for="moeda"></label>
                     <div className="boxSectionTop">
                      <input 
                        className="MoedasInput" 
                        type="number" 
                        size="2"value={valueEuro}
                        onChange={(e) => setValueEuro(e.target.value)} 
                      />
                      <a href='https://bit.ly/3Sw6dTB' target="_blank">
                        <button 
                          className="buttonMoeda" 
                          type="submit" 
                        >
                            Valor do Euro Hoje
                        </button>
                      </a> 
                    </div>
                  </div>
 
                  <div className="valorMoeda"> 
                     <h4 className="MoedaHoje">Insira o valor em Euro (€) que deseja converter:</h4>
                     <label className="labelMoedas"  for="moeda"></label>
                     <input 
                      className="MoedasInput" 
                      type="number" 
                      size="2" 
                      value={valueToConvertEuro}
                      onChange={(e) => setValueToConvertEuro(e.target.value)}
                    />
                 </div> 

                  <div className="boxSection">
                    <button 
                      className="buttonConvert" 
                      type="submit"
                      isDisabled={isDisabled}
                      onClick={EuroConvert} 
                      >
                        Converter
                    </button>

                    <button 
                      className="btnZerarMoeda"  
                      onClick={resetTwo}
                    >
                      Zerar
                    </button>  
                  </div>       
                   
                  <div className="results">O Valor em Real é R$:</div>
                   <div className="valorConvertidoMoeda" >R$ {resultadoEuro}</div>
                 </div>             
             </div>
          </div>
      </div>  
    </div>
  )
} 