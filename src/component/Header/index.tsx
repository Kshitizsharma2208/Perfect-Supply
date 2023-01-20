import React from "react";
import "./header.scss";
import msgIcon from "../../styles/images/msgNew.png";
import timeIcon from "../../styles/images/timeNew.png";
import fb from "../../styles/images/fbNew.png";
import link from "../../styles/images/LinkNew.png";
import whatsapp from "../../styles/images/whatsNew.png";
import insta from "../../styles/images/InstaNew.png";
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
                                <img className="icons" src={link} alt="" />
                            </a>
                        </div>
                        <div className="iconBox">
                            <a href="">
                                <img className="icons" src={whatsapp} alt="" />
                            </a>
                        </div>
                        <div className="iconBox">
                            <a href="">
                                <img className="icons" src={insta} alt="" />
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
                                <a href="/AboutServices">
                                    <p className="dropbtn">About Us</p></a>
                                <div className="dropdown-content">
                                    <a href="#page-1">HSE Policy</a>
                                    <a href="#page-2">Mission & Vision</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <p className="dropbtn">Services</p>
                                <div className="dropdown-content services">
                                    <a href="/OilAndGas">Oil AND GAS</a>
                                    <a href="/Civil">CIVIL CONSTRUCTION</a>
                                    <a href="/Construction">MECHANICAL CONSTRUCTION</a>
                                    <a href="/Electrical">ELECTRICAL</a>
                                    <a href="/Marine">MARINE</a>
                                    <a href="/Hospitality">Hospitality</a>
                                    <a href="/Manufacturing">Production & Manufacturing</a>
                                    <a href="/InformationTechnology">Information Technology</a>
                                    <a href="/Banking">Banking</a>
                                    <a href="/Logistics">Logistics & E-Commerce</a>
                                    <a href="/OfficeStaff">Office Staff</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <p className="dropbtn">Enquiry</p>
                            </div>
                            <div className="dropdown">
                                <a href="/Contact">
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
