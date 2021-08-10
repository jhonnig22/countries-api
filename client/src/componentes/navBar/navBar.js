import { Link } from "react-router-dom";


export default function Navbar(){

    return(
        <nav>
            <div>
                <div>
                    <img>
                    </img>  {/* imagen del nav*/ }

                    <div>
                        <div><Link to='/home'>Home</Link></div>
                        <div><Link to='/activity' >Activity</Link></div>
                        <div><Link to='/about'>About</Link></div>
                        <div><Link to='/'>Exit</Link></div>
                    </div>
                </div>
            </div>

           
        </nav>
    )
};