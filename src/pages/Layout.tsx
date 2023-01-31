import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Swiper from '../component/Swiper'

const Layout = (props: any) => {
    return (
        <div className='oilAndGasPage'>
            <Header />

            {props.children}
            <Footer />
        </div>
    )
}
export default Layout