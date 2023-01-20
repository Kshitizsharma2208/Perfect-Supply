import React from 'react';
import Header from '../../component/Header';
import SwiperProduction from '../../component/SwiperProduction';
import "./MechanicalAndConstruction.scss";

const Production = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperProduction />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Production & Manufacturing</p>
                <p className="contentInnner">We serve large, Multi-national manufactures, small to medium sized companies. Our inherent strength is supplying technical, skilled and unskilled staff with production background..</p>
            </div>

        </div>
    )
}

export default Production