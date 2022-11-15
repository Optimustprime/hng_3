import logo from "../images/logo.png";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import x from '../images/x.png';
import dog from '../images/dog.png';
import dog_ from '../images/dog_.png';
import arrow from '../images/arrow.png';

export default function Header(){
    const [show, setShow] = useState(false);
    return(
        <div>
            {
                show && <div className='pop'>
                <div className='meta'>
                    <div className='m_t'>Connect Wallet<img onClick={()=> setShow(!show)} className='x' src={x}/></div>
                    <hr/>
                    <div className='m_s'>
                        <div className='m_text'>Choose your preferred wallet:</div>
                        <button className='m_button'><img className='dog' src={dog}/><div className='word' >Metamask</div><img className='arrow' src={arrow}/></button>
                        <button className='m__button'><img className='dog' src={dog_}/><div className='word' >WalletConnect</div><img className='arrow' src={arrow}/></button>
                    </div>
                </div>
                </div>
            }
            <nav id="mynav" className="navbar navbar-expand-lg navbar-light fixed-top nav-pad">
                <div className="container-fluid">
                    <a href=''><img className="logo" src={logo} alt="logo"/></a>
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
                            <button onClick={()=> setShow(!show)}>Connect wallet</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}