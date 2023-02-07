import React from 'react';
import PageLayout from '../pageLayout';
import { swipeData } from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';

const Marine = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            <PageLayout
                title="Man Power Supply for"
                content="Marine"
                heading="We supply qualified electrical professionals on short or long term basis for any commercial installations. We ensure that our candidates meet the highest standards.."
            />
        </Layout>
    )
}

export default Marine