import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';
import '../css/Navbar.css';

import Logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top nav-shadow" style={{ height: '80px' }}>
            <div className="container">
                <a className="navbar-brand text-orange" href="#home">
                    <img src={Logo} alt="Logo da empresa" style={{ width: '150px' }} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-orange nav-button" href="#home">
                                Início
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-orange nav-button" href="#services">
                                Serviços
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-orange nav-button" href="#about">
                                Sobre
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-orange nav-button" href="#contact">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;