//import React from 'react';
//import { Header} from './components/Header/';
//import { Switch, Route, Redirect} from "react-router-dom";
//import {Homepage} from './veiws/Homepage/index';
//import {CarouselContainer} from './components/CarouselContainer/index';
//import { Contact } from './veiws/Contact';
//import { About } from './veiws/About/index';
//import {Footer} from './components/Footer/index'
////import { Router } from 'react-router-dom';
//
//
//
//
//const DashboardRoutes = () => {  
//  return (
//    <>
//              <Header/>
//              
//      <div className=""> 
//        <Switch>
//             <Route exact path="/about"> component = { About}
//                 <Footer/>
//              </Route>
//              <Route path="/contact">
//                 <Contact/>
//                 <Footer/>
//              </Route>
//              <Route path="/login">
//                 <LoginScreen/>
//                  <Link/>
//                  <Footer/>
//                </Route>
//                <Route path="/">
//                   <CarouselContainer/> 
//                   <Homepage/>            
//                </Route>
//
//                <Redirect to="/about" />
//            </Switch> 
//
//    </div>
//
//    </>
//  );
//}
//
//export default DashboardRoutes;