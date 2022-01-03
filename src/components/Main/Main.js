import React, { Component } from 'react'
import CardMenu from '../CardMenu/CardMenu'
import add from './add.svg'
import clipboard from './clipboard.svg'
import fork from './fork.svg'
import './Main.css'
import MenuModal from '../MenuModal/MenuModal'

class Main extends Component {

    render() {
        return (
            <div className='w-75'>
                <div className="main-wrapper w-100 d-flex">
                    <aside className='sidebar mt-2 shadow-sm'>
                        <img className='mb-3' src={fork} alt="" />
                        <img className='mb-3' src={clipboard} alt="" />
                        <img src={add} onClick={this.props.toggleAddMenu} alt="" />
                    </aside>
                    <div className="main-menu bg-light">
                            <CardMenu menu = {this.props.menu} onAdd = {this.props.onAdd}/>
                        </div>
                    </div>
                    {this.props.displayMenuModal ? <MenuModal 
                    onAddMenuItem = {this.props.onAddMenuItem}
                    toggleAddMenuNot = {this.props.toggleAddMenuNot}/> : null} 
                </div>
        )
    }
}

export default Main
