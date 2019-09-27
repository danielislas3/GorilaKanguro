import React , {createContext,Component} from 'react'; 
export const MyContext = createContext()

export default class ContextProvided extends Component {
  state = {
 
  }
  // addProducts=product=>{
  //   this.setState(prev=>({products:[...prev.products,product]}))
  // }
  // addToCart=product=>{
  //   this.setState(prev=>({cart:[...prev.cart,product]}))

  // }
  render() {
    // const {addProducts,addToCart} = this
    return (
      <MyContext.Provider value={{state: this.state}}>{this.props.children}</MyContext.Provider>
    )
  }
}