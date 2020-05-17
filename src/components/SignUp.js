import React, { Component } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';

import { Router,Link} from 'react-router-dom';
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
 
export default class Form extends Component {
   state={
       
       anonymusname:"", 
       email:"",
       password:"",
       redirect:false,
       formErrors:{
        anonymusname:"",
        email:"",
        password:"", 
       }
       
   };
   
 
Change = e => { 
    
    this.setState({
        [e.target.name]: e.target.value

    });
};  


validate = () =>{
    let isError = false;
    const errors ={};

    if (this.state.anonymusname.length < 3){
        isError = true;       
       
    }
    if (isError){
        this.setState({
            ...this.state,
            formErrors: {
                anonymusname : "username needs to be at least three characters long"

            }
        });
    }
    console.log(this.state);
    return isError;  
}

   onSubmit = e => {
    e.preventDefault();
   const error = this.validate();

   console.log(error)


   if (!error){
    
        this.setState({
            anonymusname:"",
            email:"",
            password:"",  
        });
 
        postData("https://floating-shelf-00762.herokuapp.com/", { ...this.state })
        .then(data => {
          
          
         localStorage.setItem("user", JSON.stringify(data)) ;
           
    alert("you signed up sucessfully") 
                this.setState({
                    redirect: true
                })
    // JSON data parsed by `response.json()` call
        });
    
    

    } else{
        return alert("Fill in your details correctly and sign up please")
    }
        
    }; 

   
    
    

   render(){
    if (this.state.redirect) {
        return <Redirect to='/profile' />
    } 
       return(
           <div className= "container-fluid  ">
           <div className="container-fluid  ">
        <Link to ="/signUp"><button type="button"className="btn bg-secondary">sign up</button> </Link>
        <Link to ="/signIn"><button type="button"className ="btn bg-secondary">Sign in</button></Link>
        </div> 
        <div className="container-fluid lower_modal ">
           
           <h4>Never tell anyone your anonymus name</h4>
           <br/>
           
           <form>
             
              <h6>anonymus name</h6> 
              <div className="form-group " action="/" method="post">
                  <input
                  name="anonymusname"
                  type="text"
                   placeholder="coded name " 
                  value={this.state.anonymusname} 
                  onChange={e =>this.Change(e)}
                  errortext={this.state.formErrors.anonymusname}
                  />
                  </div>
                  
                 
                 <h6>email</h6>
              
                  <input
                  name="email"
                  type="email" 
                   placeholder="email" 
                  value={this.state.email}
                  onChange={e =>this.Change(e)}
                  errortext={this.state.formErrors.email}
                  />
               
                
               
              <h6>password</h6>
             
                  <input
                  name="password"
                  type="password" 
                   placeholder="password" 
                  value={this.state.password}
                  onChange={e =>this.Change(e)}
                  errortext={this.state.formErrors.password}
                  />
                  
   
              <button type="submit" className="btn bg-secondary" 
              onClick= {(e)=> this.onSubmit(e)}>Submit</button>

           </form>
                </div>
                </div>
            
       );
   
   }
}
  