import React from "react";
import "./hscPolicy.scss";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import ManPower from "../../styles/images/ManPowerSupply.png";
import Swiper from "../../component/Swiper";
import SwipeData from "./data.js";
import Layout from "../Layout";

const AboutServices = () => {
    return (
        <div className="aboutServices">
            <Layout>
                <Swiper
                    Header={SwipeData.Header}
                    Main={SwipeData.Main}
                    BannerHead={SwipeData.BannerHead}
                    BannerBottom={SwipeData.BannerBottom}
                />
                <div className="container contentAboutServices">
                    <div className="aboutBanner">
                        <img src={ManPower} alt="" className="banner" />
                    </div>
                    <div className="leadingManpowerSection">
                        <div className="manpowerContent">
                            <p className="aboutManpower">{SwipeData.ManPowerHeading}</p>
                        </div>
                        <p className="subheaderManpower">{SwipeData.ManPowerSubHeading}</p>
                        <p className="aboutContent">{SwipeData.ManPowerContent}</p>
                        <div className="policyDetails">
                            <div className="hscPolicy">
                                <p className="policyDetailhead">{SwipeData.HSCPolicyHead}</p>
                            </div>
                            <p className="detailDescribe">{SwipeData.PolicyContent}</p>
                        </div>
                        <div className="policyDetails">
                            <div id="hscPolicy" className="hscPolicy">
                                <p className="policyDetailhead missionPolicy">
                                    {SwipeData.MissionPolicyHead}
                                </p>
                            </div>
                            <p className="detailDescribe">{SwipeData.MissionContent}</p>
                        </div>
                        <div className="policyDetails">
                            <div id="mission" className="hscPolicy">
                                <p className="policyDetailhead">{SwipeData.VisionPolicyHead}</p>
                            </div>
                            <p className="detailDescribe">{SwipeData.VisionContent}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default AboutServices;
