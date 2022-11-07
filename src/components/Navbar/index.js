import { Link } from 'react-router-dom';
import MenuMobile from '../MenuMobile';
import { GiEightBall} from 'react-icons/gi'
import { RiNumbersFill } from 'react-icons/ri'
import { BiDizzy } from "react-icons/bi";
import { FaDog, FaBalanceScale, FaDollarSign } from 'react-icons/fa';
import { BsThermometerSnow } from "react-icons/bs";
import './navbar.css'


export default function Navbar() {
  return (
    <div className="navbar">

    <MenuMobile />   

      <Link to="/"><div className='imgLogo'></div></Link>
    <ul className="list">   
      <li className="item"><Link to="/Termometricas" target="blank"><BsThermometerSnow className="itenIcon"/>Escalas Termométricas</Link></li>
      <li className="item"><Link to="/Moedas" target="blank"><FaDollarSign className="itenIcon"/>Conversor de Moedas</Link></li>
      <li className="item"><Link to="/MediaEscolar" target="blank"><RiNumbersFill className="itenIcon"/> Média Escolar</Link></li>
      
      <li className="item"><Link to="/AgeDog" target="blank"><FaDog className="itenIcon"/> Idade do seu Pet</Link></li>
      <li className="item"><Link to="/Mentalista" target="blank"><BiDizzy className="itenIcon"/> Mentalista</Link></li>
      <li className="item"><Link to="/Imc" target="blank"><FaBalanceScale className="itenIcon"/> IMC</Link></li>      

      <li className="item"><Link to="/EightBall" target="blank"><GiEightBall className="itenIcon"/> Bola 8</Link></li>
    </ul>
  </div>
  )
}