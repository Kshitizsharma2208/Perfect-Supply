import React from 'react';
import PageLayout from '../pageLayout';
import Swiper from '../../component/Swiper';
import { swipeData } from './data.js';
import Layout from '../Layout';

const Electrical = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            <PageLayout
                title="Man Power Supply for"
                content="Electrical"
                heading="We supply qualified electrical professionals on short or long term basis for any commercial installations. We ensure that our candidates meet the highest standards.."
            />
        </Layout>
    )
}

export default Electrical;