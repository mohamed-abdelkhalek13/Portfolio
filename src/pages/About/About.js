import React, { useEffect } from "react";
import "./About.scss";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";




export default function About (){
    let [letterClass, setClass] = React.useState("text_animate");
    let  nameArray = ["A","b","o","u","t"," ","m","e"];
    useEffect (function(){
        setTimeout(function(){
            setClass("text_animate_hover");
        },3000);
    },[])
    return (
        <div>
            <div className="container about-page">
                <div className="text-zone">
                    <h1 className="headLine about-header">
                        <AnimatedLetters 
                        letterClass = {letterClass} 
                        strArray={nameArray} 
                        idx={15}
                        /> 
                    </h1>
                    <p className="firstp paragraph">My name is<span className="my-name"> Mohamed Abd-Elkhalek</span>
                    , a civil engineer who decided to build the sites I love the most. Check out my <a className="my-cv" href="https://drive.google.com/file/d/1Evu8ZyYc8CkmZuQKq4J7bE4Db_MD2E7j/view?usp=sharing" target="_blank" rel="noopener noreferrer"> CV</a> for more info.
                    <br/>
                    <br/>
                    I am a very ambitious front-end developer looking for a role in established IT company
                    with opportunity to work with the latest technologies on challenging and diverse projects.
                    </p>
                    <p className="secondp paragraph">
                    I could define myself as a tech obsessed guy, a family person, a football fan and a video games lover. 
                    </p>
                </div>  
                <div className="cube">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faBootstrap} />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </div>
    )
}




