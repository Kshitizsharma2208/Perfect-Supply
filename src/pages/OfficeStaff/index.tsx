import React from 'react';
import PageLayout from '../pageLayout';
import { swipeData } from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';

const OfficeStaff = () => {
    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />
            <PageLayout
                title="Man Power Supply for"
                content="Office Staff"
                heading="We cover most aspects of business office support staff requirements across all industry sectors - Accounts, Administration, Facilities, H.R, Marketing, Customer service, Payroll, Secretarial, Receptionist and Data entry."
            />
        </Layout>
    )
}

export default OfficeStaff