import React from 'react';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';
import PageLayout from '../pageLayout';
import { swipeData } from './data';

const Logistic = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            <PageLayout
                title="Man Power Supply for"
                content="Logistic"
                heading="We focuses on providing skilled workforce for various positions in warehousing, assembly, packaging, fulfillment, transportation and clerical services in the logistics sector."
            />
        </Layout>
    )
}

export default Logistic;