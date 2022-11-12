import logo from "../images/logo.png";
import {Link} from "react-router-dom";
import React from "react";
export default function Header(){
    return(
        <div >
            <nav id="mynav" className="navbar navbar-expand-lg navbar-light fixed-top nav-pad">
                <div className="container-fluid">
                    <img className="logo" src={logo} alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 nav-fon">
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">Home</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="#/place">Place to stay</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">NFTs</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">Community</a>
                            </li>
                        </ul>
                        <div className="pad">
                            <button>Connect wallet</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}