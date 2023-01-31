import React from 'react';
import Header from '../../component/Header';
import "../../styles/common/page.scss";
import PageLayout from '../pageLayout';
import SwipeData from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';

const MechanicalAndConstruction = () => {
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
                    content="Mechanical Construction"
                    heading="We have an enviable track record, providing management, engineering and skilled labour staff to the civil Construction industry. We work on behalf of most renowned and efficient civil contractors. With many years experience in the industry our client base has been established and predominantly built on repeat business and referrals."
                />
            </Layout>
        </div>
    )
}

export default MechanicalAndConstruction