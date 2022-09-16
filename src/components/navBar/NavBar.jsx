import React from 'react'
import { Form } from './Form';
import { CartWidget } from "../cartWidget/CartWidget"
import "./NavBar.css"
import { Link } from 'react-router-dom';

export const NavBar = () => {
return (
    <div id="" className="">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <Link to='/'><a className="navbar-brand"><img className='imglogoNav' src="/assets/logosweet.jpg" alt="Logo " /></a> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
            <Link to='/categoria/torta'>
                {<li className="nav-item">
                <a className="nav-link"><img className='imgNav' src="/assets/torta.jpg" alt="Logo torta" /> </a>
                </li>}
            </Link>
            <Link to='/categoria/mesadulce'>
                {<li className="nav-item">
                <a className="nav-link" ><img className='imgNav' src="/assets/cookiesPerso.jpg" alt="Logo mesa" /> </a>
                </li>}
            </Link>
            <Link to='/categoria/brownie'>
                {<li className="nav-item">
                <a className="nav-link" ><img className='imgNav' src="/assets/brownieOreo.jpg" alt="Logo Brownie" /> </a>
                </li>}
            </Link>
            </ul>
            <Form contBuscar="Productos" />
            <CartWidget />
        </div>

        </div>
    </nav>
    </div>
)
}