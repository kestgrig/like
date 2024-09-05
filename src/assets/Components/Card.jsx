
import { FaFaceSmile } from "react-icons/fa6";
import dogImg from '../../assets/dog.png'
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function Card() {
    
    const [heart, setHeart] = useState(false) ;
    const [count, setCount] = useState(0);

    const handleHeart = () => {
        if (!heart) {
            setHeart(true)
            setCount(count +1)
        } else {
            setHeart(false)
            setCount(count -1)
        }
    }

    return (
        <div className="card" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
            <span>Patiktukai: {count}</span>
            <div className="card card-header" style={{display: "flex", justifyContent: "center", alignItems: "center", gap:20}}>
                <FaFaceSmile />
                <p style={{marginTop: 15}}>Please like my Dog</p>
            </div>
            <img src={dogImg} alt="" style={{width: 200}} onDoubleClick={handleHeart} />
            <div className="card-footer">
                {heart ? <FaHeart style={{fontSize: 50, color: "red"}} />  : <FaHeart style={{fontSize:"50"}} onClick={handleHeart} /> }
            </div>
       
        </div>
    )
}

export default Card