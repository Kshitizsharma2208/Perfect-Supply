import React from 'react';
import logo from "../../styles/images/logo.png"
import fb from "../../styles/images/fbBlue.png"
import insta from "../../styles/images/instaBlue.png"
import link from "../../styles/images/linkdinBlue.png"
import "./footer.scss"

const Footer = () => {
    return (
        <div className='footerSection'>
            <div className="container footerItems">
                <div className="aboutCompany col-lg-4">
                    <div className="logo">
                        <img src={logo} alt="" className="logoImg" />
                    </div>
                    <p className="aboutTag">"We are number one Labour Supply Company supplying Skilled workers across UAE"</p>
                    <div className="socialLogo">
                        <img src={fb} alt="" className='social' />
                        <img src={insta} alt="" className='social' />
                        <img src={link} alt="" className='social' />
                    </div>
                </div>
                <div className="aboutManpowerSupply col-lg-2 col-md-6">
                    <div className="headSupply">Man Power <br /> Supply</div>
                    <div className="supplyContent">
                        <p className="contentSupply">Oil And Gas </p>
                        <p className="contentSupply">Civil Construction </p>
                        <p className="contentSupply">Mechanical Construction </p>
                        <p className="contentSupply"> Electrical </p>
                        <p className="contentSupply">Marine</p>
                        <p className="contentSupply">Oil And Gas </p>
                        <p className="contentSupply">Man Power Supply </p>
                        <p className="contentSupply">Production & Manufacturing </p>
                    </div>
                </div>
                <div className="aboutHospitality col-lg-2">
                    <div className="supplyContent">
                        <p className="contentSupply">Hospitality</p>
                        <p className="contentSupply">Information Technology</p>
                        <p className="contentSupply">Bank</p>
                        <p className="contentSupply">Logistics & E-Commerce</p>
                        <p className="contentSupply">Office Staff</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer