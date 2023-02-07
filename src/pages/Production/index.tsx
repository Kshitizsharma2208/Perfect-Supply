import React from 'react';
import { swipeData } from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';

const Production = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        {swipeData.ProductionHead}
                    </p>
                </div>
                <p className="contentHeading">{swipeData.Header}</p>
                <p className="contentInnner">{swipeData.ProductionContent}</p>
            </div>
        </Layout>
    )
}

export default Production