import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {getCountris} from '../../actions/index';
export default function Start(){
let dispatch = useDispatch();
 function start(){
   dispatch(getCountris());
  
}
    return(
        <div>
            <div><Link to='/home' onClick={start} >Start</Link></div>
        </div>
    )
}