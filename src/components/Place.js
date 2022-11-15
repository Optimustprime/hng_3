import Header  from './navbar';
import set from '../images/setting-5@2x.png';
import React, {useState} from "react";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import six from "../images/six.png";
import seven from "../images/seven (2).png";
import eight from "../images/eight (2).png";
import star from "../images/star.png";
import nine from "../images/nine.png";
import ten from "../images/ten.png";
import eleven from "../images/eleven.png";
import twelve from "../images/twelve.png";
import thirteen from "../images/thirteen.png";
import forteen from "../images/forteen.png";
import fifteen from "../images/fifteen.png";
import sixteen from "../images/sixteen.png";



function Card(){
    return (
        <div className="row hunnn">
            <Body_ src={one}/>
            <Body_ src={two}/>
            <Body_ src={three}/>
            <Body_ src={four}/>
            <Body_ src={five}/>
            <Body_ src={six}/>
            <Body_ src={seven}/>
            <Body_ src={eight}/>
            <Body_ src={nine}/>
            <Body_ src={ten}/>
            <Body_ src={eleven}/>
            <Body_ src={twelve}/>
            <Body_ src={thirteen}/>
            <Body_ src={forteen}/>
            <Body_ src={fifteen}/>
            <Body_ src={sixteen}/>
        </div>

    )
}

function Body_(props){
    return(
        <div className=" col-lg-3 col-md-6 col-sm-12">
            <div className="cards">
                <img className="ava" src={props.src} alt="images.png"/>
                <div className="b__word">Desert <span className="space"> king</span>  <span className="b_word">1MBT per night</span> </div>
                <div className="b__word">2345km  <span className="space_">away</span> available for 2weeks stay</div>
                <img className="star" src={star} alt="images.png"/>
            </div>
        </div>
    )
}
function Body(){
    const [show, setShow] = useState(false);
    return(
        <div>
            <div className="navbar navbar-expand-lg navbar-light nav-pad back">
                <div className="container-fluid">
                    <div className=" navbar-collapse " >
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 nav-fonn blind">
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">Resturant</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="#/place">Cottage</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">Castle</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">fantast city</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">beach</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">Carbins</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">Off-grid</a>
                            </li>
                            <li className="nav-item ms-4 nav-font">
                                <a className="active" aria-current="page" href="">Farm</a>
                            </li>
                        </ul>
                        {
                          show &&  <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 nav-fonn blind_">
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="">Resturant</a>
                                </li>
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="#/place">Cottage</a>
                                </li>
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="">Castle</a>
                                </li>
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="">fantast city</a>
                                </li>
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="">beach</a>
                                </li>
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="">Carbins</a>
                                </li>
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="">Off-grid</a>
                                </li>
                                <li className="nav-item ms-4 nav-font">
                                    <a className="active" aria-current="page" href="">Farm</a>
                                </li>
                            </ul>
                        }
                        <div className="loca">
                            <button onClick={()=> setShow(!show)}>Location<img className='set' src={set} alt='set.png'/></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Place(){
    return(
        <div>
            <Header/>
            <Body/>
            <Card/>
        </div>

    )
}
export default Place;