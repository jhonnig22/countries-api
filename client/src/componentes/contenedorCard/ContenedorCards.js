import Card from "../Card/Card.js";
import { Link } from "react-router-dom";
import style from './contenedor.module.css';


export default function ContenedorCars(props){
let countries = props.countries;

return(
        
       <div className={style.contenedor}>
           {countries? countries.map((elem,i)=>{
               return  <Link className={style.links} key={i} to={`/detalle/${elem.Id}`} > <Card key={elem.Id}
                            name={elem.Name}
                            region={elem.Region}
                            img={elem.Img}/></Link>
           }):<p>No countries</p>}
       </div>
)
}