import React, { Component } from 'react';

import  "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home  from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Default from "./components/Default";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/Login";
import './mysass.scss';
import { BrowserRouter as Router,Switch, Route, Link
} from "react-router-dom";



export default class App extends Component {

  // onSubmit = fields =>{
  //   console.log("app comp got: ",fields);
  // };


  render(){
  return (
    <React.Fragment>
    <Router>
      <div>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Nav/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile" component={Profile}>
          </Route>
          <Route path="/SignIn" component={SignIn} />
          
          <Route path="/SignUp" component={SignUp} 
          />
         
          <Route path="/"> <Home />

  
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}


    
     
 
 
  </React.Fragment>

    )
  }
}
