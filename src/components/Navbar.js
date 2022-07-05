import React from 'react'

const Navbar = () => {
    return (
        <div className='col-md-12 bg-dark py-3'>
            <nav className="navbar  navbar-dark">
            <a className="navbar-brand" href={"/"}>
                Voice controller navigation 
            </a>


            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/tutorials">
                        Tutorials
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/about">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/contact">
                        Contact
                    </a>
                </li>
            </ul>

        </nav>

        </div>

        
    )
}

export default Navbar