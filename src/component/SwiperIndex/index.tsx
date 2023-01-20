import React from 'react'
import banner1 from "../../styles/images/banner1.jpg";
import banner2 from "../../styles/images/banner2.jpg";
import banner3 from "../../styles/images/banner_3.jpeg";
import bannerShade from "../../styles/images/banner-shape.png";
import "../../styles/common/common.scss";



const SwiperIndex = () => {
    return (
        <div className='swiperContainer'>
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100 banner" alt="..." />
                        <div className="container content">
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationText'>We got</p>
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">Highly qualified <br /> professionals <br /> and skilled <br /> labour
                            </h1>
                            <a href="/AboutServices">
                                <button type="button" className="btn btn-warning">Read More</button>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100 banner" alt="..." />
                        <div className="container content manpower">
                            <p data-animation="fadeInUp" data-delay=".3s" className='animationText'>Perfect Manpower Supply Services</p>
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">More than 25+ <br />Years <br /> Experiences </h1>
                            <a href="/AboutServices">
                                <button type="button" className="btn btn-warning">Read More</button>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100 banner" alt="..." />
                        <div className="container content hrPartner">
                            <h1 data-animation="fadeInUp" data-delay=".5s" className="animationTextBig">Your Perfect HR <br />Partner </h1>
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