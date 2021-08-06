import React, { useState } from 'react';
import './contact.css';


//value={nombre} onChange={manejarNombre}
function Contact() {
   const [persona, setPersona] = useState({
       name:"",
       lastname:"",
       email:"",
       phone:"",
       sugerencia:"",
    });

   const formulario = (event) => {
       const {name, value} = event.target;
       setPersona(prevPersona => ({
           ...prevPersona, 
           [name]: value
       }))

       console.log(persona);
   }

   //onChange(e){
   //    this.setState({
   //        [e.target.name]: e.target.value
   //    })
   //}

   

   const submit = (event) => {
       event.preventDefault();
       console.log(persona);
   }

    return(
        <div>
                    <form className="conatiner_center" onSubmit={submit}>
                <div >
                   <label htmlFor="" className="label">Name:</label>
                   <input  className="input" type= "text" value={persona.nombre} name="nombre" onChange={formulario}/>
                </div>
                <div>
                   <label htmlFor="" className="label">Lastname:</label>
                   <input className="input" type= "text" value={persona.apellido} name="apellido" onChange={formulario}/>
                </div>
                <div>
                   <label htmlFor="" className="label">Email:</label>
                   <input  className="input" type= "email" value={persona.correo} name="correo" onChange={formulario}/>
                </div>
                <div>
                   <label htmlFor="" className="label" > Phone:</label>
                   <input className="input" type= "number" value={persona.telefono} name="telefono" onChange={formulario}/>
                </div>
                <div className="textarea">
                  <label htmlFor="" className="label">Commentary:</label>                   
                  <textarea  value={persona.sugerencia} name="sugerencia" onChange={formulario}/>
                </div>
                <div className="button">
                   <button >
                       Submit
                  </button>
                  <span style={{color: 'green'}}></span>
                  
                </div>
                        
               
           </form>
        
        </div>
    )
}

export default Contact;