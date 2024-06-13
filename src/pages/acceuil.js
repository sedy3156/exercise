
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./register";
import React from "react";
function Acceuil() {
    const [showLogin, setShowLogin] = React.useState(true);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleRegisterClick = () => {
        setShowLogin(false);
    };

    return (
        <div className={"section"}>
            <div className="acceuil">
                <ul>
                    <li onClick={handleLoginClick}   className={showLogin ? 'active' : ''} >Login</li>
                    <li onClick={handleRegisterClick}   className={!showLogin ? 'active' : ''}>Register</li>
                </ul>
            </div>
            {showLogin ? <Login /> : <Register />}
        </div>
    );
}


export default Acceuil;