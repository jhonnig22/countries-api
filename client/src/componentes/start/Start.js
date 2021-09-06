import { Link } from "react-router-dom";
import style from './start.module.css';

export default function Start(){


    return(
        <div>
            <p>esta es el trabajo Individual De la carrera de bootcamp Henry</p>
            <div ><Link className={style.buttonStart} to='/home'>Start</Link></div>
        </div>
    )
}