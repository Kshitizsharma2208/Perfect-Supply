import React from 'react';
import Header from '../../component/Header';
import SwiperBanking from '../../component/SwiperBanking';
import "./Banking.scss";

const Banking = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperBanking />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Banking</p>
                <p className="contentInnner">We serve large, Multi-national manufactures, small to medium sized companies. Our inherent strength is supplying technical, skilled and unskilled staff with production background..</p>
            </div>

        </div>
    )
}

export default Banking