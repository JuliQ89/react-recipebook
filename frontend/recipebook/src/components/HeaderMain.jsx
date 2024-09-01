import React from 'react';
import slider_1 from "../assets/images/slider_1.jpg";
import slider_2 from "../assets/images/slider_2.jpg";
import slider_3 from "../assets/images/slider_3.jpg";
import slider_4 from "../assets/images/slider_4.jpg";

const HeaderMain = () => {
    return (
        <div className='d-flex p-2 w-100'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide w-100" style={{ height: '80vh' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner h-100">
                    <div className="carousel-item active h-100" data-bs-interval="10000">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                        <img src={ slider_1 } className="d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item h-100" data-bs-interval="2000">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                        <img src={ slider_2 } className="d-block w-100 h-100" alt="Second slide" style={{ objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item h-100">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                        <img src={ slider_3 } className="d-block w-100 h-100" alt="Third slide" style={{ objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item h-100">
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                        <img src={ slider_4 } className="d-block w-100 h-100" alt="Third slide" style={{ objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fourth slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HeaderMain