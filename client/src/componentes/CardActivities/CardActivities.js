import style from './CardActivities.module.css'


export default function CardActivities(props){


   return(
       <div className={style.contenedorActivities}>
           <p className={style.Name}> {props.Name}</p>
           <div>
                <ul>
                    <li>Season: {props.Season}</li>
                    <li>Durarion: {props.Duration}</li>
                    <li>Dificulty: {props.Difficulty}</li>

                </ul>

           </div>
       </div>
   ) 
}