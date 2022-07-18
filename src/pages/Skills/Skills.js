
import React from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import "./Skills.scss";
import Loader from "react-loaders";
import { useEffect, useState } from "react";

export default function Skills (){
    let [letterClass, setClass] = useState("text_animate");

    let  nameArray = ["M","y"," ","s","k","i","l","l","s"];
    useEffect (function(){
        setTimeout(function(){
            setClass("text_animate_hover");
        },3000);
    },[])
    return (
        <div>
            <div className="container contact-page">
                <div className="text-zone">
                        <h1 className="headLine skills-header">
                            <AnimatedLetters 
                            letterClass = {letterClass} 
                            strArray={nameArray} 
                            idx={15}
                            /> 
                        </h1>
                        <p className=" paragraph">
                            front-end development technologies such as
                            <span className="skill html"> HTML5, </span>
                            <span className="skill css">CSS3, </span>
                            <span className="skill js">JavaScript, </span>
                            <span className="skill sass">SASS, </span>
                            <span className="skill bootstrap">Bootstrap5, </span>
                            <span className="skill react">Reactjs / React router, </span>
                            <span className="skill react">Git, </span>
                            <span className="skill react">and GitHub. </span>
                        </p>
                        <div className="skills3d">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>SASS</li>
                                <li>Bootstrap5</li>
                                <li>Reactjs</li>
                            </ul>
                        </div>
                </div>
            </div>
        <Loader type="pacman"/>
        </div>
    )
}