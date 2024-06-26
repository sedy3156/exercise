import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Acceuil from "./pages/acceuil";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import Chat from "./pages/Chat";
import {useEffect, useState} from "react";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/chat"} element={<Chat/>}/>
            <Route path={"/Login"} element={<Login/>}/>
            <Route path={"/forgot_password"} element={<ForgotPassword/>}/>
            <Route path={"/Register"} element={<Register/>}/>
            <Route path={"*"} element={<Acceuil/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
