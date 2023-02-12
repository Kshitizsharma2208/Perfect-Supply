import React from 'react';

import logo from "../../styles/images/logo.png"

import { ReactComponent as FB } from "../../styles/images/square-facebook.svg";
import { ReactComponent as LI } from "../../styles/images/linkedin.svg";
import { ReactComponent as Insta } from "../../styles/images/square-instagram.svg";
import { ReactComponent as WhatsApp } from "../../styles/images/square-whatsapp.svg";

import "./footer.scss"

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
                        <img src={logo} alt="" className="logoImg" />
                    </div>
                    <p className="aboutTag">"We are number one Labour Supply Company supplying Skilled workers across UAE"</p>
                    <div className="socialLogo">
                        <FB className="social" />
                        <LI className="social" />
                        <Insta className="social" />
                        <WhatsApp className="social" />

                    </div>
                </div>
                <div className="aboutManpowerSupply col-lg-2 col-md-6">
                    <div className="headSupply">We Supply <br/> Man Power For</div>
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