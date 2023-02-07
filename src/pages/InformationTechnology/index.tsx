import React from 'react';
import PageLayout from '../pageLayout';
import Swiper from '../../component/Swiper';
import { swipeData } from './data.js';
import Layout from '../Layout';

const InformationTechnology = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            <PageLayout
                title="Man Power Supply for"
                content="Information Technology"
                heading="The company has earned an extraordinary reputation for successful supplying of talented hospitality executives in a broad range of top, medium and lower level roles in hotels, resorts, spas, clubs, casinos, restaurants, convention facilities, campus/university dining services, food service companies, and other areas of the hospitality industry.."
            />
        </Layout>
    )
}

export default InformationTechnology