import CardActivities from '../CardActivities/CardActivities.js';
import style from './ContenedorActivities.module.css';
export default function ContenedorActivities(props){

    

    return(
        <div className={style.contenedorActivities}>
             {props.activities && props.activities.length>0 ? props.activities.map(activities=>{
                 
                 return <CardActivities key={activities.id}
                                        Name={activities.Name} 
                                        Season={activities.Season}
                                        Duration={activities.Duration}
                                        Difficulty={activities.Difficulty}/>
             } ):<div></div>}
        </div>
    )
}