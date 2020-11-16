import React from "react";
import './style.css';


const Icon = () => {

    return (
        <>
            <div className="icons fixed-bottom ">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./Image/Resume view.pdf">
                            <img src="https://img.icons8.com/nolan/60/open-resume.png" alt="resume"/>
                        </a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/robeil-aregawi">
                            <img src="https://img.icons8.com/color/60/000000/linkedin-circled.png" alt="linked-in" /></a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/Robeil">
                        <img src="https://img.icons8.com/windows/60/000000/github.png" alt="github"/></a></li>
                </ul>
            </div>
        </>
    )
}

export default Icon;