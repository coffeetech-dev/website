import React from 'react'; import Link from "next/link";
import NavItems from "../common/NavItems";

function Header() {
    return (
        <header className="header-s3">
            <div className="header-container">
                <div className="header-top-container">
                    <div className="container">
                        <div className="header-s3__top">
                            <div className="p-left">
                                <div className="tb-single-info-s2">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <p><Link href="tel:88 ( 5548 ) 6548">+88 ( 5548 ) 6548</Link></p>
                                    </div>
                                </div>
                                <div className="tb-single-info-s2">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <p>
                                            <Link href="mailto:infoyour@gmail.com">infoyour@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="tb-single-info-s2">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="content">
                                        <p>
                                            <a
                                                href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415"
                                            >Circle Kitty New York</a
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-right">
                                <ul className="social-icons-s1">
                                    <li>
                                        <Link href="https://www.facebook.com/QuomodoSoft"
                                        ><i className="fa-brands fa-facebook-f"></i
                                        ></Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/QuomodoSoft"
                                        ><i className="fa-brands fa-twitter"></i
                                        ></Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/QuomodoSoft"
                                        ><i className="fa-brands fa-linkedin-in"></i
                                        ></Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/QuomodoSoft"
                                        ><i className="fa-brands fa-youtube"></i
                                        ></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom-container">
                    <div className="container">
                        <div className="header-s3__bottom">
                            <div className="p-left">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/assets/images/logos/logo-blue.svg" alt=""/>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-center">
                                <NavItems/>
                            </div>
                            <div className="p-right">
                                <Link href="/service" className="btn btn-s3">Start a Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;