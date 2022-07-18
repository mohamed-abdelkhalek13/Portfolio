import "./Layout.scss";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";


export default function Layout(){
    return (
        <div className="app">
            <SideBar/>
            <div className="page">
                <div className="top-tag tags">&lt;body&gt;</div>
                <div className="top-div top-tag tags">&lt;div&gt;</div>
                <Outlet/>
                <div className="bottom-div bottom-tag tags">&lt;/div&gt;</div>
                <div className="bottom-tag tags">&lt;/body&gt;</div>
                <br/>
                <div className="bottom-tag-html tags">&lt;/html&gt;</div>
            </div>
        </div>
    )
}

