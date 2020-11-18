import React from 'react';
import Header from '../Header/index';
import './style.css';
//import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';
import CovidImg from '../../Image/screenshot/CovidTracker.png';
import Jobimg from '../../Image/screenshot/JobFinder.png';
import NoteImg from '../../Image/screenshot/note-taker-front.png';
import FitnessImg from '../../Image/screenshot/fitness-tracker.png';

const Portfolio = () => {

    return (
        <>
            <Header />

            <div className="card text-white bg-secondary mb-3 project-0" style={{ maxWidth: "540px" }}>
                <div class="row no-gutters">
                    <img src={CovidImg} className="card-img-top" alt="covid img" />
                    <div class="card-body">
                        <a href="https://github.com/ShepLT1/covid-tracker.git">GitHub Repo</a>
                        <br>
                        </br>
                        <a href="https://sheplt1.github.io/covid-tracker/">Deployed link</a>
                    </div>
                </div>
            </div>
            <div class="project-title-0 mx-auto">
                <h3>Covid Tracker</h3>
                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
                    There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Tools used</h3>
                <h3>APIS Used</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <hr className="line-0"></hr>
            </div>
            <div className="card text-white bg-secondary mb-3 project-1" style={{ maxWidth: "540px" }}>
                <div class="row no-gutters">
                    <img src={Jobimg} className="card-img-top" alt="job finder img" />
                    <div class="card-body">
                        <a href="https://github.com/saikitjk/JobFinder.git">GitHub Repo</a>
                        <br>
                        </br>
                        <a href="https://uw-jobfinder.herokuapp.com/">Deployed link</a>
                    </div>
                </div>
            </div>
            <div class="project-title-1 mx-auto">
                <h3>Job Finder</h3>
                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
                There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Tools used</h3>
                <h3>APIS Used</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <hr className="line-1"></hr>
            </div>
            <div className="card text-white bg-secondary mb-3 project-2" style={{ maxWidth: "540px" }}>
                <div class="row no-gutters">
                    <img src={NoteImg} className="card-img-top" alt="day planner img" />
                    <div class="card-body">
                        <a href="https://github.com/Robeil/note-taker.git">GitHub Repo</a>
                        <br>
                        </br>
                        <a href="https://express-note-app.herokuapp.com/">Deployed link</a>
                    </div>
                </div>
            </div>
            <div class="project-title-2 mx-auto">
                <h3>Note Tacker</h3>
                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
                There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Tools used</h3>
                <h3>APIS Used</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <hr className="line-2"></hr>
            </div>
            <div className="card text-white bg-secondary mb-3 project-3" style={{ maxWidth: "540px" }}>
                <div class="row no-gutters">
                    <img src={FitnessImg} className="card-img-top" alt="day planner img" />
                    <div class="card-body">
                        <a href="https://github.com/Robeil/note-taker.git">GitHub Repo</a>
                        <br>
                        </br>
                        <a href="https://express-note-app.herokuapp.com/">Deployed link</a>
                    </div>
                </div>
            </div>
            <div class="project-title-3 mx-auto">
                <h3>Fitness Tracker</h3>
                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
            There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Discovery:</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <h3>Tools used</h3>
                <h3>APIS Used</h3>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                <hr className="line-3"></hr>
            </div>

            <Icon />
        </>
    )
}

export default Portfolio;