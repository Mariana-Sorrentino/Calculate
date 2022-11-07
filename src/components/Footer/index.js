import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer>
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
      <div class="developer">
        <p>Se você precisar, entre em contato, estou quase sempre online <strong className="emoji">😉</strong></p>
        <p><strong>Developed By Mariana Sorrentino &copy; 2022</strong></p>
        <p><strong>e-mail:</strong>  marianasorrentino16@gmail.com</p>
      </div>
    </footer>
  )
}