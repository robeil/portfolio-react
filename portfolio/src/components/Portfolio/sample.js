import React from 'react';
import Header from '../Header/index';
import '../Portfolio/style.css';
import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';
import CovidImg from '../../Image/screenshot/CovidTracker-2.png';
import Jobimg from '../../Image/screenshot/DayPlanner.png';
import DayImg from '../../Image/screenshot/DayPlanner.png';
import RobeilImg from '../../Image/screenshot/robeil.jpg';

className Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Portfolio: ''
        }
    }
    render() {
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
                    <div classNameName="font-style">
                        <h1>Portfolio</h1>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <img src="./Image/screenshot/covidImg tracker-2.png" className="card-img-top" alt="Job finder image">
                                        <div className="card-body">

                                            <h4 className="card-title">Covid Tracker</h4>

                                            <h5><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-forward-fill" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.77 12.11l4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.507V6.65H2v3.9h6.8v1.003c0 .505.505.808.97.507z" />
                                            </svg><a href="https://github.com/ShepLT1/covid-tracker.git">GitHub Repo</a></h5>

                                            <h5><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-forward-fill" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.77 12.11l4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.507V6.65H2v3.9h6.8v1.003c0 .505.505.808.97.507z" />
                                            </svg><a href="https://sheplt1.github.io/covid-tracker/">Deployed link</a></h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Icon />
                    </div>
            </>
        )
    }
}
export default Portfolio;