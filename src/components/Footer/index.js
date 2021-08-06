import './footer.css'
import "./mediaquery.css"
import logo1 from "../../assets/icons/facebook.png";
import logo2 from "../../assets/icons/github.png";
import logo3 from "../../assets/icons/instagram.png";
import logo4 from "../../assets/icons/linkedin.png";

const Footer = () => (
   
    <footer>
        <div className="footer">
            <div className="footer-container">

                <span className="name">
                    Erika Blanco
                </span>
                <span>
                    erika.blanco@alteru.co
                </span>
                <div className="redes">
                    <a href="#/"><img src={logo1} alt="Facebook" /></a>
                    <a href="#/"><img src={logo2} alt="GitHub" /></a>
                    <a href="#/"><img src={logo3} alt="Instagram" /></a>
                    <a href="http://linkedin.com/in/erikajuliethblancoflorez-b44241116"><img src={logo4} alt="Linkedin" /></a>
                </div>
            </div>

            

            
        </div>
    </footer>
   
);

export default Footer;