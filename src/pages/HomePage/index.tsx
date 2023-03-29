import React from 'react';
import Layout from '../Layout';

// import manpowerLogo from "../../styles/images/aboutPage.png"
import manpowerLogo from "../../styles/images/manpowerSupply.jpg";
import choose from '../../styles/images/choose.jpeg';
import SwiperIndex from '../../component/SwiperIndex';

import { ReactComponent as Trophy } from "../../styles/images/trophy-solid.svg";

import "./demopage.scss";
import { staticData } from './data';

const HomePage = () => {

    const getIdeaSection = () => {
        return (
            staticData.map((data: any) => {
                return (
                    <div className="choosingItem">
                        <div className="chooseNumber">
                            <span className="chooseBox">{data.count}</span>
                        </div>
                        <div className="choosetext">
                            <p className="headerText">{data.heading}</p>
                            <p className="headerContent">{data.content} </p>
                        </div>
                    </div>
                )
            })
        );
    };


    return (
        <div className='homePageWrapper'>
            <Layout>
                <SwiperIndex />
                <div className="manPowerSupplyContent container">
                    <div className="manPowerContent row">
                        <div className="manPowerLogo col-xl-6 col-lg-5">
                            <img src={manpowerLogo} alt="" className="logo" />
                            {/* <img src={manpowerLogo} alt="" className="logo" /> */}
                        </div>
                        <div className="aboutManpower col-xl-6 col-lg-5">
                            <p className="manPowerheading">About Company</p>
                            <p className="manPowerHead">UAE's Leading <br /> Manpower Supply <br /> Company</p>
                            <p className="manPowerContentDetail">Perfect Manpower Supply Services offers a full range of labor contracts from highly <br /> trained professionals to skilled workers for your company.Our diverse experience <br /> ensures that the requirements of our clients are met effectively and reliably.We <br /> provides prompt response to customer needs, and professional manpower, to <br /> ensure   customer satisfaction.</p>
                            <div className="totalExperienceSection">
                                <div className="exprienceContent">
                                    <div className="leftSection">
                                        <div className="trophyContent">
                                            <div className="trophyBox">
                                                <Trophy className='trophy' />
                                            </div>
                                            <div className="experienceBox">
                                                <p className="content">25+</p>
                                                <p className="content bottom">Years Experiences</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightSection">
                                        <p className="aboutExperience">Offering our expert services and <br /> keeping our dedication to all <br /> business sectors, we have remained <br /> at the forefront.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whyChooseUs container-fluid">
                    <div className="chooseUsBanner row">
                        <div className="banner col-lg-6">
                            <img src={choose} alt="" className="bannerImg" />
                        </div>
                        <div className="bannerContent col-lg-6">
                            <div className="header">
                                <h1 className="head">Why Choose Us</h1>
                            </div>
                            <div className="headerContentUpper">
                                <p className="content">We Execute Our Ideas <br /> from Start to Finish</p>
                            </div>
                            <div className="choosingContents">
                                {getIdeaSection()}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default HomePage;