import React, { Component } from 'react';
import {ProductConsumer} from "./context";
import {Link} from "react-router-dom";

export default class home extends Component {
    render() {
        
        let user= JSON.parse(localStorage.getItem("user"))

        return (
         <div>
            
            <div className="container-fluid first-azure ">
              
                <h4>Be annonymus,leave your deepest and darkest secrets,don"t take it to the grave!
                    <span className="span-one" >

                
                {  user ? (<button type="button" className="btn bg-secondary">logout</button>) : 
                <span>
              <Link to ="/signUp"><button type="button" className="btn bg-secondary">sign up</button> </Link>
              <Link to ="/signIn"><button type="button" className="btn bg-secondary">Sign in</button></Link>
              </span>
                }
                </span> </h4> 
            
           
            
            </div>  


                    
            
           <div className= "home_modal " >
                <div className ="row" >
                    <ProductConsumer>
                    {value=>{

                     return value.user.map(user=>{
                         if (user.comment) {
                        return<div className=" home_field container-fluid "><ul className="">
                       
                        <li> <i class="fa fa-user" aria-hidden="true"></i>{user.anonymusname}</li>
                        <li>{user.comment}</li>
                       
                        </ul>
                         </div>
                         }
                          
                     });

                     }

                    }
                    </ProductConsumer>   
                    
                </div>
            
            </div>
           </div>
        
        )
    }
}
