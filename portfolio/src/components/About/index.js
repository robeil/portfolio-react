import React from 'react';
import './style.css';
import Header from '../Header/index';
import backgroundImg from '../../Image/background.jpg';
import aboutImg from '../../Image/screenshot/robeil.jpg';
import Icons from '../Icon/index';


class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            About: ""
        }
    }
    render() {
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
                    <div className="col-4 float-right top">
                        <div className="font-style">
                            <p>My name is Robeil Aregawi.
                            I was born and raised in Eritrea.
                            In 2017, I came to USA and I
                            been working as
                            professional driver and currently,
                            am attending at University of Washington in Seattle as Full Stack Web
                    Development.</p>
                        </div>
                    </div>
                    <div className="font-style">
                        <h1>About Me</h1>
                    </div>
                    <div className="aboutImg">
                        <img style={{ borderRadius: "50%" }} src={aboutImg} alt="profile image" />
                    </div>
                    <br>
                    </br>

                    <div className="text-about ">
                        <div className="col-sm-3 top float-right">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="navbar-nav text-dark">
                                        <li><b>Full name</b> : Robeil Aregawi</li>
                                        <li><b>Phone number</b> : 206-602-5164</li>
                                        <li><b>Email address</b> : silukeen1@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Icons />
                </div>
            </>
        )
    }
}


export default About;