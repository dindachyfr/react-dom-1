import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import add from '../Main/add.svg'
// eslint-disable-next-line no-unused-vars
import Menu from '../Menu/Menu'



class CardMenu extends Component {
    render() {
        return (
            <div className='main-menu-wrapper mx-3 d-flex justify-content-around'>
                {this.props.menu.map((product)=>(
            <div id={product.id} className="card" onClick={this.props.onAdd}>
            <img id={product.id} src= {product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <h3>IDR {product.price}</h3>
            </div>
                ))}
        </div>
)
    }
}

export default CardMenu
