import {useDispatch, useSelector} from 'react-redux'
import {getCountryId} from '../../actions/index.js';
import {useEffect} from 'react';
import style from './detalle.module.css';
import ContenedorActivities from '../contenedorActivities/ContenedorActivities.js';

export default function Detalle(props){
        
        const dispatch = useDispatch();

        useEffect(()=>{
                dispatch(getCountryId(props.match.params.id));
        },[])
     
        const state = useSelector(state=>state.countryId);



        console.log(state);
    return (
    
    <div className={style.contenedor}>
                 <div className={style.contenedorCountry}>
                        
                        <div>
                                <img className={style.imgCountry} src={state.Img}></img>
                        </div>
                                 
                        <div className={style.contenedorDetalles}>
                               <p className={style.Name}>{state.Name}</p>
                               <ul>
                                       
                                       <li>Area: {state.Area}</li>
                                       <li>Capital: {state.Capital}</li>
                                       <li>Population: {state.Population}</li>
                                       <li>Region: {state.Region}</li>
                                       <li>SubRegion: {state.Subregion}</li>

                                </ul>  
                        </div>
                </div>

                <div className={style.contenedorActivities}>
                                <p className={style.title}>Activities</p>
                             <ContenedorActivities activities={state.Activities}/>
                </div>
            
        </div>)

    
}

