import React from 'react'
import banner1 from "../../styles/images/banner1.jpg";
import bannerShade from "../../styles/images/banner-shape.png";
import ReadMoreBtn from '../readMore';

const SwiperIndex = () => {
    return (
        <div className='swiperContainer'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100 banner" alt="..." />
                        <div className="content">
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationText'>We have</p>
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">Highly qualified <br /> professionals <br /> and skilled <br /> talent
                            </h1>
                            <ReadMoreBtn />
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

export default SwiperIndex