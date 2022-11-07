import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {

  return (
    <div className="containerHome">
    
      <div className="boxTitle">
          <div className="title">
              <h1>Vamos Calcular?</h1> 
          </div>
          <div className="subTitle">
              <h2>Escolha uma opção:</h2> 
          </div>
      </div>
      
      <div className="boxBaseHome">

      <div className="boxOptions">
          <div className="options">
              <div className="boxTitleImg">
                <h2 className="titleOptions">Conversor de Escalas Termométricas</h2>
              </div>
              <div className="boxImg">
                <Link 
                  to="/Termometricas" 
                 target="_blank">
                    <img className="imgOptions" src="https://i0.wp.com/enemdescomplicado.com.br/wp-content/uploads/2016/12/conversao-de-escalas-de-temperat.jpg?resize=640%2C360" />
                </Link>               
              </div>                   
          </div> 

          <div className="options">
              <div  className="boxTitleImg">
                <h2 className="titleOptions">Conversor de Moedas</h2>
              </div>
              <div className="boxImg">
                <Link 
                  to="/Moedas" 
                 target="_blank">
                    <img className="imgOptions" src="https://www.proteste.org.br/-/media/proteste/images/home/dinheiro/cambio/pim-cambio.jpg?rev=0b724b00-a190-40f9-8ad5-d9752e120404" />
                </Link>                
              </div>
          </div>

          <div className="options">
              <div className="boxTitleImg">
                <h2 className="titleOptions">Calcular Média Escolar</h2>
              </div>
                <div className="boxImg">
                <Link 
                  to="/MediaEscolar" 
                 target="_blank">
                  <img className="imgOptions" src="https://www.carreras.unse.edu.ar/wp-content/uploads/2020/09/1-rKl1NaDPUFeFSlEd1WY9WA-1024x576.jpeg" />
                </Link>
                </div>
          </div>

      </div>

      <div className="boxOptions">
          <div className="options">
              <div className="boxTitleImg">
                <h2 className="titleOptions">Calcular a Idade "Humana" de seu Dog</h2>
              </div>
              <div className="boxImg">
                <Link 
                  to="/AgeDog" 
                 target="_blank">
                  <img className="imgOptions" src="https://meucaocompanheiro.com/blog/wp-content/uploads/2016/05/capa-video-facebook-3-770x340.png" />
                </Link>
              </div>
          </div>

          <div className="options">
              <div className="boxTitleImg">
                <h2 className="titleOptions">Mentalista - Adivinhe o Número Secreto</h2>
              </div >
              <div className="boxImg">
                <Link 
                  to="/Mentalista" 
                 target="_blank">
                    <img className="imgOptions" src="https://coincentral.com/wp-content/uploads/2018/07/online-gambling-874x398.png" />
                </Link>                
              </div>
          </div>

          <div className="options">
              <div  className="boxTitleImg">
                <h2 className="titleOptions">Calcular IMC  </h2>
              </div>
              <div className="boxImg">
              <Link 
                to="/Imc" 
               target="_blank">
                <img className="imgOptions" src="https://www.dicasdetreino.com.br/wp-content/uploads/2013/01/IMC-O-que-%C3%A9-IMC-como-calcular-tabela-e-IMC-ideal.jpg" />
              </Link>
              </div>
          </div>

      </div> 

        <div className="boxOptions">
          <div className="options">
              <div className="boxTitleImg">
                <h2 className="titleOptions">Bola 8 - Faça uma Pergunta!</h2>
              </div>
              <div className="boxImg">
                <Link 
                  to="/EightBall" 
                 target="_blank">
                  <img className="imgOptions" src="https://www5.minijuegosgratis.com/v3/games/thumbnails/229076_1.jpg" />
                </Link>
              </div>
          </div>
      </div> 

      </div>
    </div>
  );
}
