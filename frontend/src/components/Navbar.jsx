import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const logout = async() => {
        try {
            await axios.delete('http://localhost:5050/logout');
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="navbar " role="navigation" aria-label="main navigation">
            {/* <div className="container"> */}
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
                    </a>
                
                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a href="/" className="navbar-item">
                        Home
                    </a>
                    </div>
                
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <button className="button is-light" onClick={logout}>
                            Logout
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Navbar
