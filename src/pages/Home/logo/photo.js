import "./photo.scss";
import myphoto from "../myphoto.jpg";



export default function Photo(){
    return (
        <div className="photo-container">
            <img className="photo"
            src={myphoto} alt="myphoto"></img>
        </div>
    )
}