import React from "react";
import './style.css';
//import Resume from '../../Image/screenshot/Resume-(6).pdf';


const Icon = () => {

    return (
        <>
            <div className="icons fixed-bottom ">
                <ul class="nav">
                    <li class="nav-item">
                    <a class="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vSkDG7p1tookAS48n9qclArN6_nJ7uCfddW4nMA3MxZ6isQ-O4aiYKnSCUlB_yNUoMAfVPsUkC9nQ4Y/pub">
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