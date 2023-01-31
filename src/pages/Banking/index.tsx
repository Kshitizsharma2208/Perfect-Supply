import React from 'react';
import Header from '../../component/Header';
import Swiper from '../../component/Swiper';
import "../../styles/common/page.scss";
import Layout from '../Layout';
import PageLayout from '../pageLayout';
import SwipeData from './data.js';

const Banking = (props: any) => {
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
                    content="Banking"
                    heading="We serve large, Multi-national manufactures, small to medium sized companies. Our inherent strength is supplying technical, skilled and unskilled staff with production background.."
                />
            </Layout>
        </div>
    )
}

export default Banking