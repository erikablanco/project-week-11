import  Header from './components/Header/';
import Homepage from './veiws/Homepage';
import CarouselContainer from './components/CarouselContainer/index';
import Contact from './veiws/Contact';
import About from './veiws/About';
import LoginScreen from './components/LoginScreen';
import DataTable from './veiws/DataTable/index'; 
import Footer from './components/Footer/index'
//import { Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


function App() {  

  const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user])

    return (

      <AuthContext.Provider value={{ user, dispatch }}>
         <Router> 
      <Header contact ="contactenos"/>
            <Switch>
            <Route path="/datatable">
             <DataTable/>                    
          </Route>
          <Route path="/about">
            <About />
            <Footer/>
          </Route>
          <Route path="/contact">
            <Contact/>
            <Footer/>
          </Route>
          <Route path="/home">
          <CarouselContainer/>
          <Link/> 
            <Homepage/>    
          </Route>
          <Route path="/">
          <LoginScreen/>
          <Link to="./home"></Link>
          <Footer/>                               
          </Route>         
        </Switch> 
                
       </Router>  
      </AuthContext.Provider>

  );
}

export default App;