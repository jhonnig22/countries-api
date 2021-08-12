import { Link } from "react-router-dom";
import style from './navBar.module.css';

export default function Navbar(){

    return(
        <nav >
            <div className={style.container}>
                <p>COUNTRY API</p>
                <div><Link to='/home' className={style.item}>Home</Link></div>
                <div><Link to='/activity' className={style.item}>Activity</Link></div>
                <div><Link to='/about'className={style.item}>About</Link></div>
                <div><Link to='/'className={style.item}>Exit</Link></div>   
            </div>        
        </nav>
    )
};