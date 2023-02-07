import React from 'react';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';
import PageLayout from '../pageLayout';
import { swipeData } from './data.js';

const Banking = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            <PageLayout
                title="Man Power Supply for"
                content="Banking"
                heading="We serve large, Multi-national manufactures, small to medium sized companies. Our inherent strength is supplying technical, skilled and unskilled staff with production background.."
            />
        </Layout>
    )
}

export default Banking