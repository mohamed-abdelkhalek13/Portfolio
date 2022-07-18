import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
import emailjs from "@emailjs/browser";


export default function Contact (){
    let [letterClass, setClass] = useState("text_animate");

    let ref = useRef(null);
    let  nameArray = ["C","o","n","t","a","c","t"," ","m","e"];
    useEffect (function(){
        setTimeout(function(){
            setClass("text_animate_hover");
        },3000);
    },[])

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            "service_pnnmqjm",
            "template_gkhfn1c",
            ref.current,
            "m3mYulbbIkXNzzLTZ"
        ).then(function(){
            alert("message sent successfully");
            window.location.reload(false);
        }, function(){
            alert("message failed, please try again");
        });
    }
    


    return (
        <div>
            <div className="container contact-page">
                <div className="text-zone contact-zone">
                        <h1 className="headLine contact-header">
                            <AnimatedLetters 
                            letterClass = {letterClass} 
                            strArray={nameArray} 
                            idx={15}
                            /> 
                        </h1>
                        <p className=" contact-paragraph">
                            I am interested in freelance opportunities - especially ambitious or large projects.
                            <br/>
                            If you have any question or request please do not hesitate to contact me.
                        </p>
                </div>
                <div className="contact-form">
                    <form onSubmit={sendEmail} ref={ref}>
                        <ul>
                            <li className="half">
                                <li>
                                    <input type="text" placeholder="Name" name="name" required></input>
                                </li>
                                <li >
                                    <input type="email" placeholder="Email" name="email" required></input>
                                </li>
                            </li>
                            <li>
                                <input type="text" placeholder="Subject" name="subject" required></input>
                            </li>
                            <li>
                                <textarea placeholder="Messaage" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        <Loader type="pacman"/>
        </div>
    )
}