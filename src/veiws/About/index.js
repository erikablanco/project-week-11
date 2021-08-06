import React from 'react'
import './about.css'
import './mediaquerys.css'
import foto2 from "../../assets/images/erika.jpeg";



const About = () => (
    <div className="container">
       
        <div className="card">
            <img src={foto2} alt="FotoProfile" />
            <div className="info-card">
                <h2>Erika Blanco</h2>
                <hr></hr>
                <p>Bióloga,  atraída  por el desarrollo web frontend, me encanta crear aplicaciones ya que puede ayudar a resolver  problemas  actuales de  la sociedad, a superar sus desafíos a través de la tecnología.  Estoy buscando    proyectos en los que pueda utilizar mi creatividad y mi capacidad de trabajo en equipo.</p>        
            </div>
        </div>
        
    </div>
);

export default About;