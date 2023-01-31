import React from 'react';
import Header from '../../component/Header';
import "../../styles/common/page.scss";
import SwipeData from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';
const OilAndGas = () => {
    return (
        <div className='OilAndGasPage'>
            <Layout>
                <Swiper
                    Header={SwipeData.Header}
                    Main={SwipeData.Main}
                    BannerHead={SwipeData.BannerHead}
                    BannerBottom={SwipeData.BannerBottom}
                />
                <div className="oilAndGasContent container">
                    <div className="content">
                        <p className="contentHeader">
                            {SwipeData.OilandGasHead}
                        </p>
                    </div>
                    <p className="contentHeading">{SwipeData.Header}</p>
                    <p className="contentInnner">{SwipeData.OilandGasContent}</p>
                </div>
            </Layout>
        </div>

    )
}

export default OilAndGas