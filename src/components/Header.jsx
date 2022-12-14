import React from 'react';
import Picture from "../images/Picture.png"
import Email from "../images/Email.svg"
import LinkedIn from "../images/LinkedIn.svg"

export default function Header() {
    return (
        <header>
            <img className="main-image" src={Picture} alt="Portrait of me" />
            <h1>Laura Smidt</h1>
            <h3>Frontend Developer</h3>
            <small>laurasmidt.website</small><br/>
            <div className="buttons">
                <a href="#/" className="email"><img src={Email} alt="E-mail icon"/>E-mail</a>
                <a href="#/" className="linkedin"><img src={LinkedIn} alt="LinkedIn icon"/>LinkedIn</a>
            </div>
        </header>
        )
}