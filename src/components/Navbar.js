import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const hideNavbar = location.pathname.includes('/Login')|| location.pathname.includes("/Register")|| location.pathname.includes("/forgot_password");

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <nav className="nav-section">
                <div className="brand-title"><NavLink to={'/'} className='link'>My<span>Logo</span></NavLink></div>
                {!hideNavbar && (
                    <>
                <div className={`toggle-button ${!isOpen ? 'active' : 'hide'}`} onClick={toggleNavbar}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={`toggle-button close ${isOpen ? 'active' : 'hide'}`} onClick={toggleNavbar}>
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                </div>
                        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                            <ul>
                                <li><NavLink to={'/'} className='link'>Home</NavLink></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <NavLink to={'/Login'} className='link'>
                                <div className="submit-btn">
                                    <button type="submit">Subscribe</button>
                                </div>
                            </NavLink>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
