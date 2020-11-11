import React from "react";
import { Link } from "react-router-dom";
import '../Header/style.css';

class Header extends React.Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <button className="navbar-toggler">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <h1>Robeil Aregawi</h1>
                    <div className="collapse navbar-collapse float-right" id="navbarNav">
                        <div className="navbar-nav ml-auto">
                            <div className="nav-link active">
                                <div className="nav-link">
                                        <button className="btn"> {<Link to="/portfolio">Portfolio</Link>}</button>
                                        <button className="btn">{<Link to="/contact">Contact</Link>}</button>
                                        <button className="btn">{<Link to="/about">About</Link>}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header;