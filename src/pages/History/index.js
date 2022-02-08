import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import add from '../../components/Main/add.svg'
import clipboard from '../../components/Main/clipboard.svg'
import fork from '../../components/Main/fork.svg'
import menuicon from '../../components/Header/menuIcon.svg'
import './index.css'
import chart from './Chart.svg'

class History extends Component {

    render() {
        return (
            <div className='fluid-container g-0'>
            <header className='d-flex'>
                <div className='main-header w-100 bg-white shadow-sm'>
                    <div className="wrapper-main-header w-100 d-flex justify-content-center ms-2">
                        <img src={menuicon} className = "menu-icon" alt="" />
                        <h3>History</h3>
                    </div>
                </div>
            </header>
            <div className='d-flex'>

                <div className="main-wrapper w-100 d-flex">
                    <aside className='sidebar mt-2 shadow-sm d-flex flex-column'>
                    <Link to="/" className="nav-text">
                        <img className='mb-3' src={fork} alt="" />
                        </Link>
                        <Link to="/history" className="nav-text">
                        <img className='mb-3' src={clipboard} alt="" />
                        </Link>
                        <img src={add} className="addMenu" alt="" />
                    </aside>
                    <div className="main-menu bg-light w-100">
                    <div className="history flex-fill">
                        <div className="d-flex justify-content-around">
                        <div className="detail d-flex justify-content-center flex-column ps-2 me-2 mt-2 pink">
                            <h1>Today Income</h1>
                            <h2>Rp 1.000.000</h2>
                            <p>+2% Yesterday</p>
                        </div>
                        <div className="detail d-flex justify-content-center flex-column ps-2 me-2 mt-2 blue">
                            <h1>Orders</h1>
                            <h2>3.270</h2>
                            <p>+5% Last Week</p>
                        </div>
                        <div className="detail d-flex justify-content-center flex-column ps-2 me-2 mt-2 purple">
                            <h1>This Years Income</h1>
                            <h2>Rp 100.000.000</h2>
                            <p>+10% Last Year</p>
                        </div>
                        </div>
                        <div className='flex-fill d-flex justify-content-center mt-5'>
                            <img src={chart} alt=''/>
                        </div>
                        </div>
                    </div>
                            </div>
                            </div>
                        </div>
            )
    }
}

export default History;