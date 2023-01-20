import React from 'react';
import "./hscPolicy.scss"
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import ManPower from "../../styles/images/ManPowerSupply.png"
import SwiperAboutUs from '../../component/SwiperAboutUs';

const AboutServices = () => {
    return (
        <div className='aboutServices'>
            <Header />
            <SwiperAboutUs />
            <div className="container contentAboutServices">
                <div className="aboutBanner">
                    <img src={ManPower} alt="" className="banner" />
                </div>
                <div className="leadingManpowerSection">
                    <div className="manpowerContent">
                        <p className="aboutManpower">About Perfect Service </p>
                    </div>
                    <p className="subheaderManpower">UAE's Leading Manpower Supply Company</p>
                    <p className="aboutContent">Perfect Manpower Supply Services is a UAE based ISO 9001 certified Manpower Supply Company established in the year 1995 to provide quality personnel to all fields of expertise in the United Arab Emirates. Providing complete recruitment solutions, sourcing and supplying quality staff throughout Dubai and Abu Dhabi. <br />
                        We provide highly qualified professionals and skilled labours to support with the best top, middle and lower level workforce in a short, medium and long term basis. We are the licensed agency to provide manpower in our sponsorship to reduce the worries of our customers about compensation, insurance, labour law and accommodation of their employees. Thanks to our unflinching commitment to the best interests of the businesses and job seekers, we have gained the reputation of being a reliable, fair-minded and straightforward legal manpower supplier. <br />
                        We provide exclusive and qualified workforce for all sectors like, Oil and Gas, Mechanical Construction, Civil Construction, Electrical, Marine & Ship, Hospitality, Manufacturing, Power and Desalination plant, Information Technology, Logistics, Real Estate, General Trading, and Banking.
                    </p>
                    <div className="policyDetails">
                        <div className="hscPolicy">
                            <p className="policyDetailhead">HSE Policy</p>
                        </div>
                        <p className="detailDescribe">At Perfect Manpower Supply Services, we adhere to a stringent Health and Safety Policy. Our main goal is to help our clients to get the best results with strict compliance to Health and Safety Policy and environmental standard. Our candidates are educated are all issues related to occupational health and safety as well as environmental impacts resulting from working places.</p>
                    </div>
                    <div className="policyDetails">
                        <div id='page-1' className="hscPolicy">
                            <p className="policyDetailhead missionPolicy">Mission Policy</p>
                        </div>
                        <p className="detailDescribe">We aim to lead the market through reputation and result adhering to international standards with emphasis in hasty service, excellent employee quality and flexible hiring options. We believe in continued growth and increasing the value of our company and service by providing the opportunity for businesses to work with highly motivated individuals.</p>
                    </div>
                    <div className="policyDetails">
                        <div id='page-2' className="hscPolicy">
                            <p className="policyDetailhead">Vision Policy</p>
                        </div>
                        <p className="detailDescribe">
                            To become the largest provider of international human resources to facilitate growth and prosperity of business in UAE. To be the most preferred Manpower Supply & Recruitment Agency by rendering excellent services to both clients and candidates.</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutServices