import React, { Component } from 'react';
import {Link} from "react-router-dom";
import skull from "../skull.svg";
import styled from 'styled-components';
import '../mysass.scss';

export default class nav extends Component {
    render() {
        return (
           <Nav className="navbar navbar-expand-lg bg-dark navbar-dark px-sm-5" >
               <Link className="nav-link" to="/" className="navabr-brand col-9">
                    <img src ={skull} alt="store"
                    className="navbar-brand"/>
               </Link>
            
          <ul className="navbar-nav align-items-center ">
           
            <li className="nav-item ml-5 col-6">  
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item ml-5 col-6">
              <Link className="nav-link" to="/profile"> <i class="fa fa-user" aria-hidden="true"></i></Link>
            </li>
          </ul>
          <div>
          
          </div>
        </Nav>
         
        );
    }
}
const Nav = styled.nav`



`
;