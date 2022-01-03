import React, { Component } from 'react'
import COModal from '../MenuModal/COModal'

export class FooterBasket extends Component {

    constructor(props){
        super(props)
        this.state={
            displayCOModal: false
        }
    }

      //munculin modal add menu
      checkoutMenu = ()=>{
        if(!this.state.displayCOModal){
          this.setState({displayCOModal: true})
          console.log('lah')
        }
      }
      
      //ngilangin modal add menu
      checkoutMenuNot = ()=>{
        if(this.state.displayCOModal){
          this.setState({displayCOModal: false})
        }
      }
      

    render() {
        return (
            <div>

            <footer className='cart-footer w-25 p-3'>
            <div className="subtotal-text">
                <h4>Subtotal:</h4>
                <h4 className='subtotal-price'>IDR {this.props.subtotalPrice}*</h4>
            </div>
            <h4 className='tax-desc'>*Tax not included</h4>
            <div className="checkout-button cart-button" onClick={this.checkoutMenu}>Checkout</div>
            <div className="cancel-button cart-button" onClick={this.props.cancelAllCartItems}>Cancel</div>
            </footer>

            {this.state.displayCOModal ? <COModal 
            checkoutMenuNot={this.checkoutMenuNot}
            subtotalPrice={this.props.subtotalPrice}
            tax={this.props.tax}
            grandTotal={this.props.grandTotal}
            cart={this.props.cart}
            /> : null}

            </div>
        )
    }
}

export default FooterBasket
