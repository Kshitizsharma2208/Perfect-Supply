import React from 'react';
import Header from '../../component/Header';
import Swiper from '../../component/Swiper';
import "../../styles/common/page.scss";
import Layout from '../Layout';
import PageLayout from '../pageLayout';
import SwipeData from './data.js';

const Civil = () => {
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
                    content="Civil & Construction"
                    heading="We have an enviable track record, providing management, engineering and skilled labour staff to the civil Construction industry. We work on behalf of most renowned and efficient civil contractors. With many years experience in the industry our client base has been established and predominantly built on repeat business and referrals."
                />
            </Layout>
        </div>
    )
}

export default Civil