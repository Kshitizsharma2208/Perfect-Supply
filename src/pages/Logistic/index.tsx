import React from 'react';
import Header from '../../component/Header';
import Swiper from '../../component/Swiper';
import "../../styles/common/page.scss";
import Layout from '../Layout';
import PageLayout from '../pageLayout';
import SwipeData from './data';

const Logistic = () => {
    return (
        <div className='OilAndGasPage'>
            <Layout>
                <Swiper
                    Header={SwipeData.Header}
                    Main={SwipeData.Main}
                    BannerHead={SwipeData.BannerHead}
                    BannerBottom={SwipeData.BannerBottom}
                />
                <PageLayout
                    title="Man Power Supply for"
                    content="Logistic"
                    heading="We focuses on providing skilled workforce for various positions in warehousing, assembly, packaging, fulfillment, transportation and clerical services in the logistics sector."
                />
            </Layout>
        </div>
    )
}

export default Logistic