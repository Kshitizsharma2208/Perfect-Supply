import React from 'react';

// import logo from "../../styles/images/logo.png";

import { ReactComponent as Logo } from "../../styles/images/logo.svg";

import { ReactComponent as FB } from "../../styles/images/square-facebook.svg";
import { ReactComponent as LI } from "../../styles/images/linkedin.svg";
import { ReactComponent as Insta } from "../../styles/images/square-instagram.svg";
import { ReactComponent as WhatsApp } from "../../styles/images/square-whatsapp.svg";
import { ReactComponent as Twitter } from "../../styles/images/square-twitter.svg";

import "./footer.scss"
import { socialLink } from '../../constant';

const Footer = () => {
    const data = [
        { content: "Oil And Gas" },
        { content: "Civil Construction" },
        { content: "Mechanical Construction " },
        { content: "Electrical" },
        { content: "Marine" },
        { content: "Oil And Gas" },
        { content: "Man Power Supply" },
        { content: "Production & Manufacturing" },
    ]
    const content = [
        { content: "Hospitality" },
        { content: "Information Technology" },
        { content: "Bank" },
        { content: "Logistics & E-Commerce" },
        { content: "Office Staff" },
    ];

    const getListView = (data: any) => {
        return (
            <div className="supplyContent">
                {data.map((value: any) => {
                    return (
                        <p className="contentSupply">{value.content} </p>
                    )
                })}
            </div>
        );
    };
    
    return (
        <div className='footerSection'>
            <div className="container footerItems">
                <div className="aboutCompany col-lg-4">
                    <div className="logo">
                        {/* <img src={logo} alt="" className="logoImg" /> */}
                        <Logo />
                    </div>
                    <p className="aboutTag">"We are number one Labour Supply Company supplying Skilled workers across UAE"</p>
                    <div className="socialLogo">
                        {socialLink.fb && (
                            <a href={socialLink.fb} target="_blank">
                                <FB className="social" />
                            </a>
                        )}

                        {socialLink.insta && (
                            <a href={socialLink.insta} target="_blank">
                                <Insta className="social" />
                            </a>
                        )} 
                        
                        {socialLink.li && (
                            <a href={socialLink.li} target="_blank">
                                <LI className="social" />
                            </a>
                        )}

                        {socialLink.tw && (
                            <a href={socialLink.tw} target="_blank">
                                <Twitter className="social" />
                            </a>
                        )}

                        {socialLink.whatsApp && (
                            <a href={socialLink.whatsApp} target="_blank">
                                <WhatsApp className="social" />
                            </a>
                        )}


                    </div>
                </div>
                <div className="aboutManpowerSupply col-lg-2 col-md-6">
                    <div className="headSupply">We Supply <br /> Man Power For</div>
                    {getListView(data)}
                </div>

                <div className="aboutHospitality col-lg-2">
                    {getListView(content)}
                </div>
            </div>
        </div>
    )
}

export default Footer