import React, { Component } from 'react'
import './COModal.css'

export class COModal extends Component {
    render() {
        return (
            <div className='container-modall'>
        <div className="container-modal mt-1">
            <div className="header-container">
                <div className="header-container-upper">
                    <h4>Checkout</h4>
                    <h5>Receipt no: #19738638</h5>
                </div>
                <h5 className='mb-5'>Cashier: Rita Ratatuli</h5>
            </div>

            <div className="receipt-container">
            {this.props.cart.map((item)=>
            (
                <div id="receipt-item">
                    <div className="receipt-item text mb-3">
                        <h4>{`${item.name} x ${item.qty}`}</h4>
                        <h4>{`${item.price * item.qty}`}</h4>
                    </div>

                </div>))}
                <div className="tax-receipt text">
                    <h4>PPN 10%</h4>
                    <h4>{this.props.tax}</h4>
                </div>
                <div className="total-receipt mt-3">
                    <h3>Total: IDR {this.props.grandTotal}</h3>
                </div>
            </div>

            <div className="lower-button-receipt">
                <div className="print-button receipt-button" onClick={this.props.checkoutMenuNot}>Print</div>
                <h3>Or</h3>
                <div className="email-button receipt-button" onClick={this.props.checkoutMenuNot}>Send Email</div>
            </div>


        </div>
            </div>
        )
    }
}

export default COModal
