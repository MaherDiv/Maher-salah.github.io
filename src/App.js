import React, {Component} from 'react';
import Navbar2 from './Navbar2'
import Navbar from './navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Page/Home' 
import WhoWeAre from './Page/WhoWeAre' 
import ContactUs from './Page/ContactUs' 
import {FooterContainer} from './containers/footer'
import './App.css';


class App extends Component {
  render(){
  return ( 

<Router className="App">
  
   <header>

  

   <Navbar2/>
   <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/WhoWeAre' exact component={WhoWeAre}/>
      <Route path='/contact-us' exact component={ContactUs}/>
    </Switch>


   
   </header>

   <FooterContainer/>    
   </Router>
  );
}
}
export default App;
