import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink exact activeClassName="bg-dark text-white" className="nav-link" to="/"> Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="bg-dark text-white" className="nav-link" to="/cars">About</NavLink>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit"> Add Car </button>
                </form>
            </div>
        </nav>

    )
}

export default Nav;