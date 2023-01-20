import React from 'react';
import Header from '../../component/Header';
import SwiperLogicstics from '../../component/SwiperLogicstics';
import "./Logistic.scss";

const Logistic = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperLogicstics />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Logistic </p>
                <p className="contentInnner">We focuses on providing skilled workforce for various positions in warehousing, assembly, packaging, fulfillment, transportation and clerical services in the logistics sector.</p>
            </div>

        </div>
    )
}

export default Logistic