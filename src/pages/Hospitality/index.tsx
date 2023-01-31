import React from 'react';
import Header from '../../component/Header';
import "../../styles/common/page.scss";
import PageLayout from '../pageLayout';
import Swiper from '../../component/Swiper';
import SwipeData from './data.js';
import Layout from '../Layout';

const Hospitality = () => {
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
                    content="Hospitality"
                    heading="The company has earned an extraordinary reputation for successful supplying of talented hospitality executives in a broad range of top, medium and lower level roles in hotels, resorts, spas, clubs, casinos, restaurants, convention facilities, campus/university dining services, food service companies, and other areas of the hospitality industry.."
                />
            </Layout>
        </div>
    )
}

export default Hospitality