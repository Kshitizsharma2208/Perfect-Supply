import React from 'react'
import Header from '../component/Header';
import Footer from '../component/Footer';

const Layout = (props: any) => {
    return (
        <div className='pageWrapper'>
            <Header />

            {props.children}
            <Footer />
        </div>
    )
}
export default Layout