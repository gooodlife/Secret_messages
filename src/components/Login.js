import React, { Component } from 'react';
import '../App.css';
import {Link,Redirect} from "react-router-dom";



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

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        loginerrors: "",
        errorMessage:"",
        loggedIn:false,
        redirect:false,
      };
  
      this.onSubmit = this.onSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    validate = () =>{
      const errors ={};
  
      let iserror = !(this.state.email && this.state.password);
      errors.emailError = "wrong email or password";
      if (iserror){
          this.setState({
              ...this.state,
              ...errors,
              errorMessage:"",
          });
      }
      return iserror;  
  }
  
    onSubmit = e => {
      e.preventDefault();
     const error = this.validate();
     console.log(error)
  
  
     if (!error){
      
          this.setState({
              email:"",
              password:"", 
              errorMessage:"" ,
          });

          const {email} = this.state;
   
          postData("https://floating-shelf-00762.herokuapp.com/", { ...this.state })
          .then(data => { 
           
            // check if data is empty
            if (data.length === 0){
              // show an error message if empty,by updating the state
              this.setState({
                errorMessage :"incorrect username or password"
              })
            }
            else{
              
                var storedName =  localStorage.getItem("user", JSON.stringify(data)) ;
                
                if(!storedName ){
                  alert('ErrorMessage');
                  console.log(storedName);
              }else {
               this.setState({loggedIn:true})
               this.setState({
                redirect: true
            })
                }  }
              
            }
            // JSON data parsed by `response.json()` call
          );
      };      
    }; 
  
    render() {
      if (this.state.redirect) {
        return <Redirect to='/profile' />}
      return (
        <div>
          <Link to ="/signUp"><button type="button" className="btn bg-dark">sign up</button> </Link>
         
        <div className=" mid_modal container-fluid "  >
          
          <form onSubmit={this.onSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              errorText={this.state.ErrorMessage}
              required
            />
  <br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              errorText={this.state.ErrorMessage}
              required
            />
  <br/>
  <button type="submiit" className="btn bg-dark"
      onClick= {(e)=> this.onSubmit(e)}>login</button> 
  <a href="#" >forgot password</a>
          </form>
        </div>
        </div>
        
      );
    }
  }
  