import React from "react";
import { Link } from "react-router-dom";
import '../Header/style.css';
import Animation from '../Animation/index';

const Header = () => {

        return (
            <>
                <div className="head">
                    <Animation>
                        <h1>Robeil Aregawi</h1>
                    </Animation>
                </div>
                <div className="header navbar">
                    <button className="btn">{<Link to="/about">About</Link>}</button>
                    <button className="btn">{<Link to="/portfolio">Portfolio</Link>}</button>
                    <button className="btn">{<Link to="/resume">Resume</Link>}</button>
                    <button className="btn">{<Link to="/contact">Contact</Link>}</button>
                </div>
            </>
        )
    }


export default Header;