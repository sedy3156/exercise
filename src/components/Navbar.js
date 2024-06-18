import React, {useEffect, useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const hideNavbar = location.pathname.includes('/Login')|| location.pathname.includes("/Register")|| location.pathname.includes("/forgot_password");
    const [y, setY] = useState(window.scrollY);
    const [totalY, setTotalY] = useState(0);
    const [totalX, setTotalX] = useState(0);
    const [scrollBar, setScrollBar] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            const element = document.getElementsByTagName("body")[0];
            setTotalY(element.scrollHeight);
            setTotalX(element.clientWidth);
            setScrollBar(window.innerHeight);
        };

        window.addEventListener("scroll", () => setY(window.scrollY));
        window.addEventListener("resize", updateDimensions);

        updateDimensions(); // Initial setup

        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);
    const scroll = `${(y / (totalY - scrollBar)) * 100}%`;

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
                                <li><NavLink to={'/chat'} className='link'>Chat</NavLink></li>
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
            <div className="progress-bar" style={{width: scroll}}></div>
        </header>
    );
};

export default Navbar;
