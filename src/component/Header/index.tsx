import React from "react";
import "./header.scss";
import msgIcon from "../../styles/images/msgNew.png";
import timeIcon from "../../styles/images/timeNew.png";
import fb from "../../styles/images/fb.png";
import link from "../../styles/images/link.png";
import whatsapp from "../../styles/images/whatsapp.png";
import insta from "../../styles/images/insta.png";
import logo from "../../styles/images/logo.png";
import phone from "../../styles/images/phone.png";
import back from "../../styles/images/headerBack.png";

const Header = () => {
    return (
        <>
            <div id="page-3" className="headerTop container">
                <div className="topContent">
                    <div className="timingMailId">
                        <div className="mailUs">
                            <span className="Img">
                                <img className="msgIcon" src={msgIcon} alt="" />
                            </span>
                            <div className="mailContent">
                                <span className="head">Mail Us:</span>
                                <span className="headContent">
                                    sales@perfectservicesuae.com
                                </span>
                            </div>
                        </div>
                        <div className="officeHours">
                            <span className="Img">
                                <img className="msgIcon" src={timeIcon} alt="" />
                            </span>
                            <div className="officeHour mailContent ">
                                <span className="head">Office Hours</span>
                                <span className="headContent">9:00 AM - 06:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className="socialLogs">
                        <div className="iconBox">
                            <a href="">
                                <img className="icons" src={fb} alt="" />
                            </a>
                        </div>
                        <div className="iconBox">
                            <a href="">
                                <img className="icons" src={insta} alt="" />
                            </a>
                        </div>
                        <div className="iconBox">
                            <a href="">
                                <img className="icons" src={link} alt="" />
                            </a>
                        </div>
                        <div className="iconBox">
                            <a href="">
                                <img className="icons" src={whatsapp} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="bgHead">
                        <img src={back} alt="" className="backImg" />
                    </div>
                </div>
            </div>
            <div className="headerMain sticky">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <img src={logo} alt="" className="logoImg" />
                        </div>
                        <div className="mainMenu">
                            <div className="dropdown">
                                <a href="/" className="dropbtn">
                                    Home
                                </a>
                            </div>
                            <div className="dropdown">
                                <a href="/aboutservices">
                                    <p className="dropbtn">About Us</p></a>
                                <div className="dropdown-content">
                                    <a href="#hscPolicy">HSE Policy</a>
                                    <a href="#mission">Mission & Vision</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <p className="dropbtn">Services</p>
                                <div className="dropdown-content services">
                                    <a href="/oilandgas">Oil AND GAS</a>
                                    <a href="/civil">CIVIL CONSTRUCTION</a>
                                    <a href="/construction">MECHANICAL CONSTRUCTION</a>
                                    <a href="/electrical">ELECTRICAL</a>
                                    <a href="/marine">MARINE</a>
                                    <a href="/hospitality">Hospitality</a>
                                    <a href="/manufacturing">Production & Manufacturing</a>
                                    <a href="/informationTechnology">Information Technology</a>
                                    <a href="/banking">Banking</a>
                                    <a href="/logistics">Logistics & E-Commerce</a>
                                    <a href="/officeStaff">Office Staff</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <p className="dropbtn">Enquiry</p>
                            </div>
                            <div className="dropdown">
                                <a href="/contact">
                                    <p className="dropbtn">Contact</p>
                                </a>
                            </div>
                        </div>
                        <div className="estimateCall">
                            <div className="callLogo">
                                <img className="logo" src={phone} alt="" />
                            </div>
                            <div className="estimateHead">
                                <p className="content">Call For Estimate</p>
                                <p className="content num">+971 551319876</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
