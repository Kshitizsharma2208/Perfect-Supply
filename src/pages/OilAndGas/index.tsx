import React from 'react';
import { oilSwipeData as swipeData, productionSwipeData } from './data';
import Swiper from '../../component/Swiper';
import Layout from '../Layout';
import PageLayout from '../pageLayout';

const OilAndGas = () => {

    return (
        <Layout>
            <Swiper
                Header={swipeData.Header}
                Main={swipeData.Main}
                BannerHead={swipeData.BannerHead}
            />

            <div className='servicePageWrapper'>
                <PageLayout
                    content={swipeData.Header}
                    heading={swipeData.OilandGasContent}
                />

                <PageLayout
                    content="Civil & Construction"
                    heading="We have an enviable track record, providing management, engineering and skilled labour staff to the civil Construction industry. We work on behalf of most renowned and efficient civil contractors. With many years experience in the industry our client base has been established and predominantly built on repeat business and referrals."
                />

                <PageLayout
                    content="Mechanical Construction"
                    heading="We have an enviable track record, providing management, engineering and skilled labour staff to the civil Construction industry. We work on behalf of most renowned and efficient civil contractors. With many years experience in the industry our client base has been established and predominantly built on repeat business and referrals."
                />

                <PageLayout
                    content="Electrical"
                    heading="We supply qualified electrical professionals on short or long term basis for any commercial installations. We ensure that our candidates meet the highest standards.."
                />

                <PageLayout
                    content="Marine"
                    heading="We supply qualified electrical professionals on short or long term basis for any commercial installations. We ensure that our candidates meet the highest standards.."
                />

                <PageLayout
                    content="Hospitality"
                    heading="The company has earned an extraordinary reputation for successful supplying of talented hospitality executives in a broad range of top, medium and lower level roles in hotels, resorts, spas, clubs, casinos, restaurants, convention facilities, campus/university dining services, food service companies, and other areas of the hospitality industry.."
                />

                <PageLayout
                    content={productionSwipeData.Header}
                    heading={productionSwipeData.ProductionContent}
                />

                <PageLayout
                    content="Information Technology"
                    heading="The company has earned an extraordinary reputation for successful supplying of talented hospitality executives in a broad range of top, medium and lower level roles in hotels, resorts, spas, clubs, casinos, restaurants, convention facilities, campus/university dining services, food service companies, and other areas of the hospitality industry.."
                />

                <PageLayout
                    content="Banking"
                    heading="We serve large, Multi-national manufactures, small to medium sized companies. Our inherent strength is supplying technical, skilled and unskilled staff with production background.."
                />


                <PageLayout
                    content="Logistic"
                    heading="We focuses on providing skilled workforce for various positions in warehousing, assembly, packaging, fulfillment, transportation and clerical services in the logistics sector."
                />

                <PageLayout
                    content="Office Staff"
                    heading="We cover most aspects of business office support staff requirements across all industry sectors - Accounts, Administration, Facilities, H.R, Marketing, Customer service, Payroll, Secretarial, Receptionist and Data entry."
                />

            </div>
        </Layout>
    )
};

export default OilAndGas