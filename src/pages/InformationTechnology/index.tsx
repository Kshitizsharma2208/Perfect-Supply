import React from 'react';
import Header from '../../component/Header';
import SwiperIT from '../../component/SwiperIT';
import "./InformationTechnology.scss";

const InformationTechnology = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperIT />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Information Technology</p>
                <p className="contentInnner">The company has earned an extraordinary reputation for successful supplying of talented hospitality executives in a broad range of top, medium and lower level roles in hotels, resorts, spas, clubs, casinos, restaurants, convention facilities, campus/university dining services, food service companies, and other areas of the hospitality industry..</p>
            </div>

        </div>
    )
}

export default InformationTechnology