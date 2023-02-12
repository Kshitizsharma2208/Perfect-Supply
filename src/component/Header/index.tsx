import React from "react";
import "./header.scss";

import logo from "../../styles/images/logo.png";

import { ReactComponent as MsgIcon } from "../../styles/images/envelope-solid.svg";
import { ReactComponent as TimeIcon } from "../../styles/images/clock-solid.svg";
import { ReactComponent as Phone } from "../../styles/images/phone-solid.svg";

const Header = () => {
    const menu = [
        { content: "Oil AND GAS", value: "/oilandgas" },
        { content: "CIVIL CONSTRUCTION", value: "/civil" },
        { content: "MECHANICAL CONSTRUCTION", value: "/construction" },
        { content: "ELECTRICAL", value: "/electrical" },
        { content: "MARINE", value: "/marine" },
        { content: "Hospitality", value: "/hospitality" },
        { content: "Production & Manufacturing", value: "/manufacturing" },
        { content: "Information Technology", value: "/informationTechnology" },
        { content: "Banking", value: "/banking" },
        { content: "Logistics & E-Commerce", value: "/logistics" },
        { content: "Office Staff", value: "/officeStaff" },

    ]
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
                                    sales@perfectservicesuae.com
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
                            <img src={logo} alt="" className="logoImg" />
                        </div>
                        <div className="mainMenu">
                            <div className="dropdown">
                                <a href="/home" className="dropbtn">
                                    Home
                                </a>
                            </div>
                            <div className="dropdown">
                                <a href="/about">
                                    <p className="dropbtn">About Us</p>
                                </a>
                            </div>
                            <div className="dropdown">
                                <a href="/services">
                                    <p className="dropbtn">Services</p>
                                </a>
                                {/* <div className="dropdown-content services">
                                    {menu.map((value) => {
                                        return (
                                            <a href={value.value}>{value.content}</a>
                                        )
                                    })}
                                </div> */}
                            </div>
                            <div className="dropdown">
                                <a href="/contact">
                                    <p className="dropbtn">Contact</p>
                                </a>
                            </div>
                        </div>
                        <div className="estimateCall">
                            <div className="callLogo">
                                <Phone className="logo" />
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
