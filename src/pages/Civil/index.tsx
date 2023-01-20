import React from 'react';
import Header from '../../component/Header';
import SwiperCivil from '../../component/SwiperCivil';
import "./Civil.scss";

const Civil = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperCivil />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Civil & Construction</p>
                <p className="contentInnner">We have an enviable track record, providing management, engineering and skilled labour staff to the civil Construction industry. We work on behalf of most renowned and efficient civil contractors. With many years experience in the industry our client base has been established and predominantly built on repeat business and referrals.</p>
            </div>

        </div>
    )
}

export default Civil