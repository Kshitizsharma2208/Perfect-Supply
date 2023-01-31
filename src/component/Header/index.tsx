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
    const data = [
        { img: fb },
        { img: insta },
        { img: link },
        { img: whatsapp },
    ]

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
                        {data.map((value) => {
                            return (
                                <div className="iconBox">
                                    <a href="">
                                        <img className="icons" src={value.img} alt="" />
                                    </a>
                                </div>
                            )
                        })}
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
                                    {menu.map((value) => {
                                        return (
                                            <a href={value.value}>{value.content}</a>
                                        )
                                    })}
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
