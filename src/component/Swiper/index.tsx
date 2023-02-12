import React from 'react'

import BannerShade from "../../styles/images/banner-shape.png";
import ReadMoreBtn from '../readMore';

const Swiper = (props: any) => {
    const { BannerBottom = BannerShade } = props;

    return (
        <div className='swiperContainer'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.BannerHead} className="d-block w-100 banner" alt="..." />
                        <div className="content">
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">{props.Header}  </h1>
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationText'>{props.Main}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bannerOuter">
                <img src={BannerBottom} alt="" className="bannerOuterCover" />
            </div>
        </div>

    )
}

export default Swiper