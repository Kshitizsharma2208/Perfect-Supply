import React from "react";
import "./header.scss";

// import logo from "../../styles/images/logo.png";

import { ReactComponent as Logo } from "../../styles/images/logo.svg";

import { ReactComponent as MsgIcon } from "../../styles/images/envelope-solid.svg";
import { ReactComponent as TimeIcon } from "../../styles/images/clock-solid.svg";
import { ReactComponent as Phone } from "../../styles/images/phone-solid.svg";
import { Link } from "react-router-dom";
import { email, ph } from "../../constant";

const Header = () => {

    return (
        <>
            <div id="page-3" className="headerTop container">
                <div className="topContent">
                    <div className="timingMailId">
                        <div className="mailUs">
                            <span className="Img">
                                <MsgIcon className="msgIcon" />
                            </span>
                            <div className="mailContent">
                                <span className="head">Mail Us</span>
                                <span className="headContent">
                                    {email}
                                </span>
                            </div>
                        </div>
                        <div className="officeHours">
                            <span className="Img">
                                <TimeIcon className="msgIcon" />
                            </span>
                            <div className="officeHour mailContent ">
                                <span className="head">Office Hours</span>
                                <span className="headContent">9:00 AM - 06:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerMain sticky">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            {/* <img src={logo} alt="" className="logoImg" /> */}
                            <Logo />
                        </div>
                        <div className="mainMenu">
                            <div className="dropdown">
                                <Link to="/" className="dropbtn">
                                    Home
                                </Link>
                            </div>
                            <div className="dropdown">
                                <Link to="/about">
                                    <p className="dropbtn">About Us</p>
                                </Link>
                            </div>
                            <div className="dropdown">
                                <Link to="/services">
                                    <p className="dropbtn">Services</p>
                                </Link>
                            </div>
                            <div className="dropdown">
                                <Link to="/contact">
                                    <p className="dropbtn">Contact</p>
                                </Link>
                            </div>
                        </div>
                        <div className="estimateCall">
                            <div className="callLogo">
                                <Phone className="logo" />
                            </div>
                            <div className="estimateHead">
                                <p className="content">Call For Estimate</p>
                                <p className="content num">{ph}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
