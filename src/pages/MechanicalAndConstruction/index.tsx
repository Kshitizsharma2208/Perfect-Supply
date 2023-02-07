import React from 'react';
import PageLayout from '../pageLayout';
import { swipeData } from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';

const MechanicalAndConstruction = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}

            />
            <PageLayout
                title="Man Power Supply for"
                content="Mechanical Construction"
                heading="We have an enviable track record, providing management, engineering and skilled labour staff to the civil Construction industry. We work on behalf of most renowned and efficient civil contractors. With many years experience in the industry our client base has been established and predominantly built on repeat business and referrals."
            />
        </Layout>
    )
}

export default MechanicalAndConstruction