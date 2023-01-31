import React from 'react';
import "./demopage.scss";
import manpowerLogo from "../../styles/images/aboutPage.png"
import trophy from '../../styles/images/trophy.png';
import hrSol from '../../styles/images/hrSol.png';
import choose from '../../styles/images/choose.jpeg';
import arrowUp from '../../styles/images/arrowUp.png';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import SwipeData from './data.js';
import Swiper from '../../component/Swiper';
import SwiperIndex from '../../component/SwiperIndex';
import Layout from '../Layout';
const HomePage = (props: any) => {
    return (
        <>
            <div className='homePage'>
                <Layout>
                    <SwiperIndex />
                    <div className="manPowerSupplyContent container">
                        <div className="manPowerContent row">
                            <div className="manPowerLogo col-xl-6 col-lg-5">
                                <img src={manpowerLogo} alt="" className="logo" />
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
                                                    <img className='trophy' src={trophy} alt="" />
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
                                    <div className="hrSolution">
                                        <div className="header">
                                            <div className="headerLogo">
                                                <img src={hrSol} alt="" className="hrImg" />
                                            </div>
                                            <div className="headerContent">One Stop HR Solution</div>
                                        </div>
                                        <div className="hrContent">
                                            <p className="content">We have performed as the most <br /> dependable one-stop shop in the UAE <br /> for the supplying of both blue-collar and <br /> white-collar workers for all major <br /> industrial sectors for short and long term.</p>
                                        </div>
                                        <button className="readMoreBtn">Read More</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="whyChooseUs container-fluid">
                        <div className="chooseUsBanner row">
                            <div className="banner col-lg-6">
                                <img src={choose} alt="" className="bannerImg" />
                                <div className="chooseVideoButton">
                                    <a href=""></a>
                                </div>
                            </div>
                            <div className="bannerContent col-lg-6">
                                <div className="header">
                                    <p className="head">Why Choose Us</p>
                                </div>
                                <div className="headerContentUpper">
                                    <p className="content">We Execute Our Ideas <br /> from Start to Finish</p>
                                </div>
                                <div className="choosingContents">
                                    <div className="choosingItem">
                                        <div className="chooseNumber">
                                            <span className="chooseBox">1</span>
                                        </div>
                                        <div className="choosetext">
                                            <p className="headerText">Wide pool of skilled resources</p>
                                            <p className="headerContent">We have a team of highely motivated both blue-collar and white-collar <br /> workers for all major industrial sectors. </p>
                                        </div>
                                    </div>
                                    <div className="choosingItem">
                                        <div className="chooseNumber">
                                            <span className="chooseBox">2</span>
                                        </div>
                                        <div className="choosetext">
                                            <p className="headerText">Industry & regional exepertise</p>
                                            <p className="headerContent">Our 25+ year presence in the UAE has aided us in meeting the needs of <br /> our customers.</p>
                                        </div>
                                    </div>
                                    <div className="choosingItem">
                                        <div className="chooseNumber">
                                            <span className="chooseBox">3</span>
                                        </div>
                                        <div className="choosetext">
                                            <p className="headerText">Hiring Flexibility</p>
                                            <p className="headerContent">We provide cost-effective flexible long- and short-term contracts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>

        </>
    )
}

export default HomePage;