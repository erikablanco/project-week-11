import './header.css';
import Logo from '../Logo'
import Nav from '../Nav'
import { useState, useEffect } from 'react';

export default function Header (){
    const[show,setShow] = useState(false);
    useEffect (window.onscroll = () => {
        setShow(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    })
    return (
        <header className={show ? "sticky" : "Header"}>
        <Logo/>
        <Nav contact="Contact" about="About" home="Home" datatable="DataTable"/>
        
         </header>     
    )
}















//import img from '../../assets/img/logo.png';
//import {Link} from 'react-router-dom';
//
//export default  function  Header(props) {
//
//    //console.log(props);
//    return (
//        <header>
//            <span><Link to="/"><img src=//{img} alt="Logo del proyecto"><///img></Link></span>
//            <span><Link to="/contact">//{props.contact}</Link></span>
//            <span><Link to="/about">{props.//contact}</Link></span>
//            <span><Link to="/login">{props.//contact}</Link></span>
//        </header>
//    )
//}

