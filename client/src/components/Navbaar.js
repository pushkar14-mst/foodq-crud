import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg text-white bg-dark p-3">
                <div className="container-fluid">
                    <NavLink className='navbar-brand text-white bg-dark' to='/dashboard'>Dashboard</NavLink>
                    <NavLink className="navbar-brand text-white bg-dark" to="/">Admin Panel</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <NavLink className="nav-link active text-white bg-dark" aria-current="page" to="/user">Add Admin</NavLink>
                            </li>
                          
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className ="btn btn-outline-success" type ="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
