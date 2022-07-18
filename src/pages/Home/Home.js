
import "./Home.scss";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import React, { useEffect } from "react";
import Photo from "./logo/photo";
import Loader from "react-loaders";


export default function Home (){
    let [letterClass, setClass] = React.useState("text_animate");
    
    let nameArray = ["I","'","m","","M","o","h","a","m","e","d",","];
    let jobArr = ["a","","f","r","o","n","t","-","e","n","d"," ","d","e","v","e","l","o","p","e","r","."];
    useEffect(function(){
        setTimeout(function(){
            setClass("text_animate_hover");
        },5000)
    },[])
    return (
        <div>
            <div className="container home-page">
            <div className="text-zone">
                <h1 className="headLine">
                        <span className={letterClass}>H</span>
                        <span className={letterClass}>i,</span>
                        <br/>
                        <AnimatedLetters 
                        letterClass = {letterClass} 
                        strArray={nameArray} 
                        idx={15}
                        /> 
                        <br/>
                        <AnimatedLetters 
                        letterClass = {letterClass} 
                        strArray={jobArr} 
                        idx={24}/>
                </h1>
                <br/>
                <Link to="/contact" className="btn">Contact Me</Link>
            </div>
                <Photo/>
            </div>
            <Loader type="pacman"/>
        </div>
    )
}