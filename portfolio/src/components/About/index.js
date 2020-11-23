import React from 'react';
import './style.css';
import Header from '../Header/index';
import backgroundImg from '../../Image/background.jpg';
import aboutImg from '../../Image/screenshot/robeil.jpg';
import Icon from '../Icon/index';

const About = () => {
    return (
        <>
            <Header />
            <div className="landingImg"
                style={{
                    backgroundImage: 'url(' + backgroundImg + ')',
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"
                }}
            >

                <div className="card about-me mx-auto" style={{width: "80%"}}>
                    <div className="card-body">
                        <div className="card-text">
                            <div className="aboutImg">
                                <img style={{ borderRadius: "50%" }} src={aboutImg} alt="profile" />
                            </div>
                            <div className="card-title">
                                About Me
                            </div>
                            <p>My name is Robeil Aregawi. I am full stack web developer.</p>
                            <p>A graduate of the boot camp with an inclination towards front end development.
                            Strong professional graduated in November 2020 from University of Washington.
                            This professional history has embedded strong beliefs in teamwork,
                            critical thinking, and attention to detail within my core.
                            I am an extremely motivated person , enabling rapid professional growth and
                            solidifying essential connections in each workplace. Combined with my ability to learn quickly.
                            Skilled in Customer Service, Professional Driving, Communication, Computer Hardware Installation. </p>
                            <div>
                                <ul className="navbar-nav text-dark">
                                    <li><b>Full name</b> : Robeil Aregawi</li>
                                    <li><b>Phone number</b> : 206-602-5164</li>
                                    <li><b>Email address</b> : silukeen1@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro-header fixed-bottom" style={{ color: "black" }}>
                <Icon />
            </div>
        </>
    )
}



export default About;