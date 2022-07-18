import React from "react";
import "./card.scss";
import inprogress from "./inprogress.jpg";





export default function Card(props){
    return(
        
            <div className="card">
                <div className="image-container" >
                    <img className="project-pic" src={inprogress} alt="project_pic"></img>
                <div className="hover-overlay">
                    <div className="description">About project: <br/><span>{props.description}</span></div>
                    <div className="view"><a href={props.url}>view</a></div>
                </div>
                </div>
                <div className="project-name">project name:
                <br/>

                <span>{props.projectName}</span>
                </div>
            </div>



    )
}