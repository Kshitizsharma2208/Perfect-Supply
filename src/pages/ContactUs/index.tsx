import React from 'react';
import location from "../../styles/images/location.png";
import phone from "../../styles/images/phone-solid.svg";
// import { ReactComponent as Whatsapp } from "../../styles/images/square-whatsapp.svg";
import msg from "../../styles/images/msg.png";
import locationImg from "../../styles/images/map.png"
import "./ContactUs.scss";
import Swiper from '../../component/Swiper';
import { swipeData } from './data.js';
import Layout from '../Layout';
import { address, email, ph } from '../../constant';

const ContactUs = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            <div className="contactUsWrapper container">
                <div className="leftPart">
                    <h2 className='header'>{address?.country}</h2>
                    <div className="innerContent">
                        <div className="logo">
                            <img src={location} alt="" className="logoImg" />
                        </div>
                        <div className="logoContent">{address?.details}</div>
                    </div>
                    <div className="innerContent">
                        <div className="logo">
                            <img src={phone} alt="" className="logoImg" />
                        </div>
                        <div className="logoContent">{ph}</div>
                    </div>
                    {/* <div className="innerContent">
                        <a href={`https://web.whatsapp.com/send?phone=${whatsApp}`} target='_blank'>
                            <span className="logo">
                                <Whatsapp className="logoImg" />
                            </span>
                            <span className="logoContent">{whatsApp}</span>
                        </a>
                    </div> */}
                    <div className="innerContent">
                        <div className="logo">
                            <img src={msg} alt="" className="logoImg" />
                        </div>
                        <div className="logoContent">{email}</div>
                    </div>

                </div>
                <div className="rightPart">
                    <div className="location">
                        <img src={locationImg} alt="" className="locationImg" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs