import React from 'react'
import banner1 from "../../styles/images/Contact.jpg";
import bannerShade from "../../styles/images/banner-shape.png";
import "../../styles/common/common.scss";


const SwiperContact = () => {
    return (

        <div className='swiperContainer'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" data-swiper-autoplay="5000">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100 banner" alt="..." />
                        <div className="container content">
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationTextBig'>Contact </p>
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationText">Perfect Supply
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bannerOuter">
                <img src={bannerShade} alt="" className="bannerOuterCover" />
            </div>
        </div>


    )
}

export default SwiperContact