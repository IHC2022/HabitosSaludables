import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='col-md-12 bg-dark py-3'>
            <nav className="navbar  navbar-dark">
            <a className="navbar-brand" href={"/"}>
                Voice controller navigation 
            </a>


            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <Link to="/nuevos">
                        Nuevos habitos
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/calendario">
                        Calendario
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/habitos">
                        Habitos
                    </Link>
                </li>
            </ul>

        </nav>

        </div>

        
    )
}

export default Navbar