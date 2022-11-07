
import { Link } from 'react-router-dom';
import { GiEightBall} from 'react-icons/gi'
import { RiNumbersFill } from 'react-icons/ri'
import { FaDog, FaBalanceScale, FaDollarSign } from 'react-icons/fa';
import { BsThermometerSnow } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import '../Footer/footer.css'
import './menuMobile.css'

export default function MenuMobile() {

  var cont = 0;  
 
const openMenu = () => {
    var target = document.getElementById('open');
    var player = target.animate([
    {transform: 'translate(700px, 0)'},
    {transform: 'translate(0, 0)'}
    ], 500);
    player.addEventListener('finish', function() {
    target.style.transform = 'translate(0, 0)';    
    });

    cont = cont + 1;
    if(cont %2 !=0){
        document.getElementById('open').style.display = "none";
        document.getElementById('btnMenu').innerHTML = "Menu";     
    }else{
        document.getElementById('open').style.display = "flex";
        document.getElementById('btnMenu').innerHTML = "Fechar Menu";         
    }
}

  return (
    <div className="menuNavbar">

      <button class="btnMenu" id="btnMenu" type="button" onClick={openMenu}>Menu</button> 

      <header class="groupMenu" id="open">                         
              
        <div class="navList">
              <ul class="ItensNavList">                           
                <li className="menu"><Link to="/Termometricas" target="blank"><BsThermometerSnow className="itenIcon"/>Escalas Termométricas</Link></li>
                <li className="menu"><Link to="/Moedas" target="blank"><FaDollarSign className="itenIcon"/>Conversor de Moedas</Link></li>
                <li className="menu"><Link to="/MediaEscolar" target="blank"><RiNumbersFill className="itenIcon"/> Média Escolar</Link></li>
                
                <li className="menu"><Link to="/AgeDog" target="blank"><FaDog className="itenIcon"/> Idade do seu Pet</Link></li>
                <li className="menu"><Link to="/Mentalista" target="blank"><FaDog className="itenIcon"/> Mentalista</Link></li>
                <li className="menu"><Link to="/Imc" target="blank"><FaBalanceScale className="itenIcon"/> IMC</Link></li>      

                <li className="menu"><Link to="/EightBall" target="blank"><GiEightBall className="itenIcon"/> Bola 8</Link></li>                  
              </ul>
          </div>

          <div class="navListIcons">
            <ul className="social_list">
              <li >        
                  <a 
                    className="linkSocial"
                    href="https://www.facebook.com/"
                    target="_blank"> 
                    <FaFacebook />                       
                  </a>        
              </li>

              <li >        
                  <a 
                    className="linkSocial"
                    href="https://www.instagram.com/"
                    target="_blank"> 
                    <FaInstagram />                       
                  </a>        
              </li>

              <li >        
                  <a 
                    className="linkSocial"
                    href="https://www.linkedin.com/in/mariana-sorrentino-a19458229/"
                    target="_blank"> 
                    <FaLinkedin />                       
                  </a>        
              </li>

              <li >        
                  <a 
                    className="linkSocial"
                    href="https://github.com/Mariana-Sorrentino"
                    target="_blank"> 
                    <FaGithub />                       
                  </a>        
              </li>      
            </ul>              
          </div>
      </header>
  </div>
  )
}