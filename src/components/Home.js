import React, { Component } from 'react';
import {ProductConsumer} from "./context";
import {Link} from "react-router-dom";

export default class home extends Component {
    render() {
        return (

            <div className="container-fluid">
            <div className="container-fluid first-azure ">
              
                <h4>Be annonymus,leave your deepest and darkest secrets,don"t take it to the grave!
                    <span className="span-one" >
              <Link to ="/signUp"><button type="button" className="btn bg-dark">sign up</button> </Link>

<Link to ="/signIn"><button type="button" className="btn bg-dark">Sign in</button></Link></span> </h4> 
                
                    
            </div>
            <div className="container-fluid  second-azure bg-dark">
                <div className ="row">
                    <ProductConsumer>
                    {value=>{

                     return value.user.map(user=>{
                        return<div className="container-fluid bg-dark "><ul className="">
                       
                        <li> <i class="fa fa-user" aria-hidden="true"></i>{user.userId}</li>
                        <li>{user.messages}</li>
                        
                        </ul>
                         </div>;
                          
                     })

                     }

                    }
                    </ProductConsumer>
                    
                </div>
            
            </div>
            </div>
        )
    }
}
