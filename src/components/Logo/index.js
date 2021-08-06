import logo from './logo.png';
import './logo.css';

export default function Logo (){
    return <header>
        <span><img src={logo} alt="logo"  className="logo"/></span>
    </header>
}