import React from 'react';
import Header from '../Header/index';
import './style.css';
import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';
import CovidImg from '../../Image/screenshot/CovidTracker.png';
//import Jobimg from '../../Image/screenshot/JobFinder.png';
//import DayImg from '../../Image/screenshot/DayPlanner.png';

const Portfolio = () => {

    return (
        <>
            <Header />
            <div classNameName="landingImg"
                style={{
                    backgroundImage: 'url(' + backgroundImg + ')',
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"
                }}>
               
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card project-1 text-white bg-dark">
                                <img src={CovidImg} className="card-img-top" alt="covid img" />
                                <div class="card-body">
                                    <h4 class="card-title">Covid Tracker</h4>
                                    <a href="https://github.com/ShepLT1/covid-tracker.git">GitHub Repo</a>
                                    <br>
                                    </br>
                                    <a href="https://sheplt1.github.io/covid-tracker/">Deployed link</a>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <Icon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;