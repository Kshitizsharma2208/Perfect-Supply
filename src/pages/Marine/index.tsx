import React from 'react';
import Header from '../../component/Header';
import "../../styles/common/page.scss";
import PageLayout from '../pageLayout';
import SwipeData from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';
const Marine = () => {
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
                    content="Marine"
                    heading="We supply qualified electrical professionals on short or long term basis for any commercial installations. We ensure that our candidates meet the highest standards.."
                />
            </Layout>
        </div>
    )
}

export default Marine