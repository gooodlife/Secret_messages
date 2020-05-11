import React, { Component } from 'react';
import {userProfile} from "./data";
const ProductContext= React.createContext();
//provider
//consumer
 class ProductProvider extends Component {
     state={ "user": [] }

     fetch = async() => {
         try{
            let resp = await fetch("http://localhost:8000");
            let data = await resp.json()
            this.setState({"user": data})
         } catch(error){
             console.log(error)
         }
        }
    
    componentDidMount () {  
        this.fetch();
    }

    render() {
    
        return (
            <ProductContext.Provider value ={{
                ...this.state
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer=ProductContext.Consumer;
export{ProductProvider,ProductConsumer};
