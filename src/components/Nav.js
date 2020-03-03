import React from "react";

const Nav = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="about.html">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="contact.html">Contact</a>
            </li>
        </ul>
    )
};

export default Nav;