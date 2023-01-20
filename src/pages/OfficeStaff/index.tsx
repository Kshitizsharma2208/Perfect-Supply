import React from 'react';
import Header from '../../component/Header';
import SwiperOfficeStaff from '../../component/SwiperOfficeStaff';
import "./MechanicalAndConstruction.scss";

const OfficeStaff = () => {
    return (
        <div className='OilAndGasPage'>
            <Header />
            <SwiperOfficeStaff />
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        Man Power Supply for
                    </p>
                </div>
                <p className="contentHeading">Office Staff</p>
                <p className="contentInnner">We cover most aspects of business office support staff requirements across all industry sectors - Accounts, Administration, Facilities, H.R, Marketing, Customer service, Payroll, Secretarial, Receptionist and Data entry.</p>
            </div>

        </div>
    )
}

export default OfficeStaff