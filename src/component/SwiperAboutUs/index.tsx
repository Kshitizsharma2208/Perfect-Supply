import React from 'react'
import banner1 from "../../styles/images/banner1.jpg";
import banner2 from "../../styles/images/banner2.jpg";
import banner3 from "../../styles/images/banner_3.jpeg";
import bannerShade from "../../styles/images/banner-shape.png";
import "../../styles/common/common.scss";



const SwiperAboutUs = () => {
    return (
        <div className='swiperContainer'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner3} className="d-block w-100 banner" alt="..." />
                        <div className="container content">
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationText'>About Us</p>
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">Perfect  <br /> ManPower Supply
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

export default SwiperAboutUs