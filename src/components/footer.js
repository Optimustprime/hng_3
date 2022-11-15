import white from "../images/logo_w.png";
import face from "../images/Vector.png";
import insta from "../images/instagram-216-721958.png";
import tweet from "../images/twitter-241-721979.png";
import React from "react";

function Footer(props){
    return(
        <div className="last">
            <div className="row">
                <div className="col-lg-3">
                    <img className="w_logo" src={white} />
                    <div className="row social">
                        <div className='col-3'>
                            <img className='social_img' src={face} alt='images.png'/>
                        </div>
                        <div className='col-4'>
                            <img className='social_img' src={insta} alt='images.png'/>
                        </div>
                        <div className='col '>
                            <img className='social_img' src={tweet} alt='images.png'/>
                        </div>
                    </div>
                    <div className='c'>© 2022 Metabnb</div>
                </div>
                <div className="col-lg-2 mar">
                    <div className='top'>
                        Community
                    </div>
                    <div className='child'>NFT</div>
                    <div className='child'>Tokens</div>
                    <div className='child'>Landlords</div>
                    <div className='child'>Discord</div>
                </div>
                <div className="col-lg-2 ll">
                    <div className='top'>
                        Places
                    </div>
                    <div className='child'>Castle</div>
                    <div className='child'>Farms</div>
                    <div className='child'>Beach</div>
                    <div className='child'>Learn more</div>
                </div>
                <div className="col-lg-2 ll">
                    <div className='top'>
                        About us
                    </div>
                    <div className='child'>Road map</div>
                    <div className='child'>Creators</div>
                    <div className='child'>Careers</div>
                    <div className='child'>Contact us</div>
                </div>
            </div>
        </div>

    )
}
export default Footer;