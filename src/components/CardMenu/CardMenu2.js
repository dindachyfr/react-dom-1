import React, { Component } from 'react'

export class CardMenu2 extends Component {
    render() {
        return (
            <div className='main-menu-wrapper mx-3 d-flex justify-content-around'>
                {this.props.products.map((product, index)=>(
            <div key={index} className="card" >
            <img src= {product.items2} alt={product.items1}/>
            <h3>{product.items1}</h3>
            <h3>IDR {product.items3}</h3>
            </div>
                ))}
        </div>
        )
    }
}

export default CardMenu2
