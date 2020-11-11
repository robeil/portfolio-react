import React from "react";
import './style.css';


const Icon = () => {

    return (
        <>
            <div className="icons fixed-bottom ">
                <ul class="nav float-right">
                    <li class="nav-item">
                        <a class="nav-link" href="./Image/Resume view.pdf">
                            <img src="https://img.icons8.com/nolan/50/open-resume.png" />
                        </a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/robeil-aregawi">
                            <img src="https://img.icons8.com/color/50/000000/linkedin-circled.png" /></a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/Robeil"><img
                            src="https://img.icons8.com/windows/50/000000/github.png" /></a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://stackoverflow.com/"><img
                            src="https://img.icons8.com/color/50/000000/stackoverflow.png" /></a></li>
                </ul>
            </div>
        </>
    )
}

export default Icon;