import React from 'react';
import Header from '../../component/Header';
import SwiperHospitality from '../../component/SwiperHospitality';
import "./Hospitality.scss";

const Hospitality = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperHospitality />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Hospitality</p>
                <p className="contentInnner">The company has earned an extraordinary reputation for successful supplying of talented hospitality executives in a broad range of top, medium and lower level roles in hotels, resorts, spas, clubs, casinos, restaurants, convention facilities, campus/university dining services, food service companies, and other areas of the hospitality industry..</p>
            </div>

        </div>
    )
}

export default Hospitality