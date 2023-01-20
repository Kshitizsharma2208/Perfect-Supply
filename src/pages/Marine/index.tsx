import React from 'react';
import Header from '../../component/Header';
import SwiperMarine from '../../component/SwiperMarine';
import "./MechanicalAndConstruction.scss";

const Marine = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperMarine />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Marine</p>
                <p className="contentInnner">We supply qualified electrical professionals on short or long term basis for any commercial installations. We ensure that our candidates meet the highest standards..</p>
            </div>

        </div>
    )
}

export default Marine