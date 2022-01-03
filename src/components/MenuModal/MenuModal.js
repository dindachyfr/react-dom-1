import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import CardMenu2 from '../CardMenu/CardMenu2';
import './MenuModal.css'

export class MenuModal extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: '11',
            name : '',
            image : '',
            price : 0,
            category: ''
        }
    }

    setName = (e)=>{
        this.setState ({
            name : e.target.value
        })
    } 
    setPrice = (e) =>{
        this.setState ({
            price : e.target.value
        })
    }
    setImage = (e) =>{
        this.setState ({
            image : e.target.value
        })
    }

    setCategory = (e) =>{
        this.setState ({
            category : e.target.value
        })
    }


    render() {

        const {id,name,image,price} = this.state
        const handleSubmit = (e)=>{
            e.preventDefault();
            const data = {id, name, image, price} 
            this.props.onAddMenuItem(data)
        }

        return (
            <div className="container-modall-1">
            <div className="container-modal-1">
            <h3>Add Item</h3>
            <form className='modalForm m-1' >
                <div className='d-flex justify-content-around'>
                <label  className='modalLabel'>Name </label>
                <input type="text" className='modalInput' onChange={this.setName} name="" /><br />
                </div>
                <div className='d-flex justify-content-around'>
                <label  className='modalLabel'>Image </label>
                <input type="text" className='modalInput'  onChange={this.setImage} name=""/><br />
                </div>
                <div className='d-flex justify-content-around'>
                <label  className='modalLabelPrice'>Price</label>
                <input type="number" className='modalInput'  onChange={this.setPrice} name=""/><br />
                </div>
                <label  className='modalLabelCategory'>Category</label>
                <select className='modalInput' onChange={this.setCategory}>
                    <option value="Coffee">Food</option>
                    <option value="Main Course">Beverages</option>
                </select>
                <div className="lower-button-item">
                <h4 className="cancel-button-item add-item-button" onClick={this.props.toggleAddMenuNot}>Cancel</h4>
                <h4 className="add-button-item add-item-button" onClick={handleSubmit}>Add</h4>
            </div>
                
            </form>
            

        
            </div>
            </div>
)
    }
}

export default MenuModal
