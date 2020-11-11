import React from 'react';
import Header from '../Header/index';
import './style.css';
import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';
import CovidImg from '../../Image/screenshot/CovidTracker.png';
import Jobimg from '../../Image/screenshot/JobFinder.png';
import DayImg from '../../Image/screenshot/DayPlanner.png';
import RobeilImg from '../../Image/screenshot/robeil.jpg';

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
                    <div className="font-style">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="card-deck">
                    <div className="card">
                       
                        <div className="col-4">
                            <div className="card text-white bg-dark box">
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
                    </div>
                    <div className="row-2">
                        <div className="col-4">
                            <div className="card text-white bg-dark box">
                                <img src={Jobimg} className="card-img-top" alt="job finder img" />
                                <div class="card-body">
                                    <h4 class="card-title">Job Finder</h4>
                                    <a href="https://github.com/saikitjk/JobFinder.git">GitHub Repo</a>
                                    <br>
                                    </br>
                                    <a href="https://uw-jobfinder.herokuapp.com/">Deployed link</a>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row-2">
                        <div className="col-4">
                            <div className="card text-white bg-dark box">
                                <img src={DayImg} className="card-img-top" alt="day planner img" />
                                <div class="card-body">
                                    <h4 class="card-title">Day Planner</h4>
                                    <a href="https://github.com/Robeil/day-planner.git">GitHub Repo</a>
                                   

                                    
                                    <a href="https://robeil.github.io/day-planner/">Deployed link</a>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row-2">
                        <div className="col-4 ">
                            <div className="card text-white bg-dark box">
                                <img src={RobeilImg} className="card-img-top" alt="robeil img" />
                                <div class="card-body">
                                    <h4 class="card-title">Personal Page</h4>
                                    <a href="https://twitter.com/home">Twitter
                                        </a>
                                    <br>
                                    </br>
                                    <a href="https://www.facebook.com/robeil.brhanemeskel.3">Facebook</a>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <Icon />
            </div>
                </div>
               
            </>
        )
    }

export default Portfolio;