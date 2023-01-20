import React from 'react';
import Header from '../../component/Header';
import SwiperOilAndGas from '../../component/SwiperOilAndGas';
import "./oilAndGas.scss";

const OilAndGas = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperOilAndGas />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Oil and Gas</p>
                <p className="contentInnner">The oil and gas industry is the one of the most importrant sectors for the middle east. We have been in the forefront in the sector for the last 15 years. Oil and Gas as one of the major industry supported by us, we provide our clients Oil and Gas recruitment services with all their staffing needs under a single roof. We have a proven track record of successful placements of manpower across different profiles, ranging from experienced Project Managers to skilled labour in the Oil and Gas Industry.</p>
            </div>

        </div>
    )
}

export default OilAndGas