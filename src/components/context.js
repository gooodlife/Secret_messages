import React, { Component } from 'react';
const ProductContext= React.createContext();
//provider
//consumer
 class ProductProvider extends Component {
     state={ "user": [] }

     fetch = async() => {
         try{
             console.log(window.url)
            let resp = await fetch("https://floating-shelf-00762.herokuapp.com/");
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
