import React from 'react';
import logo from "../../styles/images/logo.png"
import fb from "../../styles/images/fbBlue.png"
import insta from "../../styles/images/instaBlue.png"
import link from "../../styles/images/linkdinBlue.png"
import "./footer.scss"
import { isContentEditable } from '@testing-library/user-event/dist/utils';

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
    ]
    const logoImg = [
        { img: fb },
        { img: insta },
        { img: link },
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
                        {logoImg.map((value) => {
                            return (
                                <img src={value.img} alt="" className='social' />
                            )
                        })}
                    </div>
                </div>
                <div className="aboutManpowerSupply col-lg-2 col-md-6">
                    <div className="headSupply">Man Power <br /> Supply</div>
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