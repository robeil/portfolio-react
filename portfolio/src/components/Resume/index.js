import React from 'react';
import ResumeView from '../../Image/screenshot/resume-copy.png';
import '../Resume/style.css';
import backgroundImg from '../../Image/background.jpg';
import HomeIcon from "../Home/index";

const Resume = () => {
    return (
        <>
            <div className="landingImg"
                style={{
                    backgroundImage: 'url(' + backgroundImg + ')',
                    backgroundSize: "cover",
                    height: "auto",
                    color: "#f5f5f5"
                }}
            >

                <HomeIcon style={{ color: "green[500]" }} />
                <img src={ResumeView} className="" alt="resume"></img>

            </div>
        </>
    )
}

export default Resume;