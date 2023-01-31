import React from 'react';
import Header from '../../component/Header';
import "../../styles/common/page.scss";
import PageLayout from '../pageLayout';
import SwipeData from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';

const OfficeStaff = () => {
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
                    content="Office Staff"
                    heading="We cover most aspects of business office support staff requirements across all industry sectors - Accounts, Administration, Facilities, H.R, Marketing, Customer service, Payroll, Secretarial, Receptionist and Data entry."
                />
            </Layout>
        </div>
    )
}

export default OfficeStaff