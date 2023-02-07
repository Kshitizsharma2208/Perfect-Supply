import React from "react";
import "./hscPolicy.scss";
import ManPower from "../../styles/images/ManPowerSupply.png";
import Swiper from "../../component/Swiper";
import { swipeData } from "./data.js";
import Layout from "../Layout";

const AboutServices = () => {
    return (
        <div className="aboutServices">
            <Layout>
                <Swiper
                    Header={swipeData.Header}
                    Main={swipeData.Main}
                    BannerHead={swipeData.BannerHead}
                />
                <div className="container contentAboutServices">
                    <div className="aboutBanner">
                        <img src={ManPower} alt="" className="banner" />
                    </div>
                    <div className="leadingManpowerSection">
                        <div className="manpowerContent">
                            <p className="aboutManpower">{swipeData.ManPowerHeading}</p>
                        </div>
                        <p className="subheaderManpower">{swipeData.ManPowerSubHeading}</p>
                        <p className="aboutContent">{swipeData.ManPowerContent}</p>
                        <div className="policyDetails">
                            <div className="hscPolicy">
                                <p className="policyDetailhead">{swipeData.HSCPolicyHead}</p>
                            </div>
                            <p className="detailDescribe">{swipeData.PolicyContent}</p>
                        </div>
                        <div className="policyDetails">
                            <div id="hscPolicy" className="hscPolicy">
                                <p className="policyDetailhead missionPolicy">
                                    {swipeData.MissionPolicyHead}
                                </p>
                            </div>
                            <p className="detailDescribe">{swipeData.MissionContent}</p>
                        </div>
                        <div className="policyDetails">
                            <div id="mission" className="hscPolicy">
                                <p className="policyDetailhead">{swipeData.VisionPolicyHead}</p>
                            </div>
                            <p className="detailDescribe">{swipeData.VisionContent}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default AboutServices;
