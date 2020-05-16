import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import '../mysass.scss';
import "../App";

export default class nav extends Component {
    render() {
        return (
          <div>
           <Nav className="navbar navbar-expand-lg bg-secondary navbar-dark px-sm-5 " >
               <Link className="nav-link" to="/" className="navabr-brand col-0">
                    <img src ={"scared.svg"} alt="store" 
                    className="navbar-brand"/>
               </Link>
             <h3 className="col-5">Dark Secrets</h3>
          <ul className="navbar-nav align-items-center ml-auto col-2 ">
         
            <li className="nav-item ml-5 ">  
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item ml-5">
              <Link className="nav-link" to="/profile"> <i className="fa fa-user" aria-hidden="true"></i></Link>
            </li>
          </ul>
          <div>
          
          </div>
        </Nav>
        </div>
        );
    }
}
const Nav = styled.nav`



`
;