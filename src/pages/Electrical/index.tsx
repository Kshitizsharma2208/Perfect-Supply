import React from 'react';
import Header from '../../component/Header';
import SwiperElecrical from '../../component/SwiperElecrical';
import "./MechanicalAndConstruction.scss";

const Electrical = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperElecrical />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Electrical</p>
                <p className="contentInnner">We supply qualified electrical professionals on short or long term basis for any commercial installations. We ensure that our candidates meet the highest standards..</p>
            </div>

        </div>
    )
}

export default Electrical