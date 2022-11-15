
import Header  from '../components/navbar';

import React from "react";

import {Link} from "react-router-dom";
import first_img from "../images/first_image.png";
import divide from "../images/divider.png";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import six from "../images/six.png";
import seven from "../images/seven (2).png";
import eight from "../images/eight (2).png";
import star from "../images/star.png";
import before from "../images/before_img.png";
import Footer from "./footer";

function First(){
    return(
        <div className="hunn">
            <div className='row hun'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="first_note">
                        Rent a <span className="note">Place</span> away from<br/> <span className="note">Home</span> in the <span className="note">Metaverse</span>
                    </div>
                    <div className="first__note">
                        we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </div>
                    <div className="row myinput">
                        <div className="col-7">
                            <input type="text" placeholder="Search for location" />
                        </div>
                        <div className="col">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="first_img" src={first_img} alt="first img"/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

function Body_top(){
    return(
        <div className='res'>
            <img src={divide} alt="divide img" className="divide"/>
            <div className="inspire">Inspiration for your next adventure</div>
        </div>
    )
}
function Card(){
    return (
        <div className="row hunnn">
            <Body src={one}/>
            <Body src={two}/>
            <Body src={three}/>
            <Body src={four}/>
            <Body src={five}/>
            <Body src={six}/>
            <Body src={seven}/>
            <Body src={eight}/>
        </div>

    )
}
function Body(props){
    return(
        <div className=" col-lg-3 col-md-6 col-sm-12">
            <div className="cards">
                <img className="ava" src={props.src} alt="images.png"/>
                <div className="b__word">Desert <span className="space"> king</span>  <span className="b_word">1MBT per night</span> </div>
                <div className="b__word">2345km  <span className="space_">away</span> <span className='ff'>available for 2weeks stay</span></div>
                <img className="star" src={star} alt="images.png"/>
            </div>
        </div>
    )
}

function Before_footer(){
    return(
        <div className="b_footer">
            <div className="row ">
                <div className="col-lg-4">
                    <div className="b__f">
                        Metabnb NFTs
                    </div>
                    <div className="b__s">
                        Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </div>
                    <button >Learn more</button>
                </div>
                <div className="col-lg-8">
                    <img className="b_img" src={before} alt="images.png"/>
                </div>
            </div>
        </div>
    )
}


export default function Home() {
    return (
        <div>
            <Header/>
            <First/>
            <Body_top/>
            <Card/>
            <Before_footer/>
        </div>
    );
}