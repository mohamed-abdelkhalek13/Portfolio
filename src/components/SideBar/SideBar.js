import "./SideBar.scss";
import {Link} from "react-router-dom";
import myphoto from "./images/myphoto.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear,faUser, faHome, faBriefcase, faG} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";




export default function SideBar (){
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img className="logo-image"src={myphoto} alt="myPhoto"></img>
                <p className="logo-text"><span className="firstLetter">M</span></p>
            </Link>
            <nav className="pages">
                <Link className="home-page links" to="/">
                    <FontAwesomeIcon className="home icon" icon={faHome} color="#4d4d4e"/>
                </Link>
                <Link className="about-page links" to="/about">
                <FontAwesomeIcon className="about icon" icon={faUser} color="#4d4d4e"/>
                </Link>
                <Link className="skills-page links" to="/skills">
                <FontAwesomeIcon className="skills icon" icon={faGear} color="#4d4d4e"/>
                </Link>
                <Link className="mywork-page links" to="/mywork">
                <FontAwesomeIcon className="mywork icon" icon={faBriefcase} color="#4d4d4e"/>
                </Link>
                <Link className="contact-page links" to="/contact">
                <FontAwesomeIcon className="contact icon" icon={faEnvelope} color="#4d4d4e"/>
                </Link>
            </nav>
            <ul className="socials">
                <li>
                    <a href="https://www.linkedin.com/in/mohamed-abdulkhalek-7bb40b227/" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="smallIcon" icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRzDscnrPLpVSCkxbSLFzzmHtZMbxqHXpShZGWgjfvvCDKdFDrLNrWljHfVprZsVnpGwKDNt" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon className="smallIcon" icon={faGoogle} color="#4d4d4e"/>
                    </a>
                </li>
                
            </ul>
        </div>
    )
}




