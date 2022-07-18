import "./MyWork.scss";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import data from"../../data";



export default function MyWork (){
    let [letterClass, setClass] = useState("text_animate");

    let  nameArray = ["M","y"," ","W","o","r","k"];
    useEffect (function(){
        setTimeout(function(){
            setClass("text_animate_hover");
        },3000);
    },[])


    let myCard = data.map(function(data, index){
        return (
            <Card 
            key={index + 1 }
            image={data.image}
            projectName={data.projectName}
            description={data.description}
            url={data.url}
            />
        )
    })
    return (
        <div>
            <div className="container contact-page">
                <div className="text-zone work-zone">
                        <h1 className="headLine contact-header">
                            <AnimatedLetters 
                            letterClass = {letterClass} 
                            strArray={nameArray} 
                            idx={15}
                            /> 
                        </h1>
                        <p className=" paragraph">
                            Here are some of my previous work if you want to check some of them out:
                        </p>
                </div>
                <div className="card-container">
                    {myCard}
                </div>
            </div>
        <Loader type="pacman"/>
        </div>
    )    
}