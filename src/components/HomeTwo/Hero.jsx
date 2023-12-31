import React from 'react'; import Link from "next/link";

function Hero() {
    return (
        <section className="hero-s2 gradient-moving">
            <div className="stretch-container">
                <div className="row flex-lg-col-reverse">
                    <div className="col-lg-6 hero-s2__content">
                        <h2 className="content-sh">World Class Cyber Security</h2>
                        <h1 className="content-h">We Bring Great Ideas to Life</h1>
                        <Link href="/service-details" className="btn btn-s1">Read More</Link>
                    </div>
                    <div className="col-lg-6 hero-s2__thumb">
                        <div className="img">
                            <img src="/assets/images/hero-img/2.png" alt=""/>
                            <img
                                src="/assets/images/backgrounds/hero-2-thumb-bg.png"
                                alt=""
                                className="b-img"
                            />
                            <div className="shapes">
                                <img
                                    src="/assets/images/shapes/hero-2-thumb-shape-1.png"
                                    alt=""
                                    className="shp-1 spin"
                                />
                                <img
                                    src="/assets/images/shapes/hero-2-thumb-shape-2.png"
                                    alt=""
                                    className="shp-2 spin"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;