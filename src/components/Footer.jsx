import React from 'react';
import Twitter from "../images/Twitter.svg"
import Facebook from "../images/Facebook.svg"
import Instagram from "../images/Instagram.svg"
import GitHub from "../images/GitHub.svg"

export default function Footer() {
    return (
        <footer>
            <img className="icons" src={Twitter} alt="Twitter icon"/>
            <img className="icons" src={Facebook} alt="Facebook icon"/>
            <img className="icons" src={Instagram} alt="Instagram icon"/>
            <img className="icons" src={GitHub} alt="Github icon"/>
        </footer>
    )
}