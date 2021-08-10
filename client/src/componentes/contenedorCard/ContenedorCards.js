import Card from "../Card/Card.js";
import style from './contenedor.module.css'


export default function ContenedorCars(props){
let countries = props.countries;

return(
        
       <div className={style.contenedor}>
           {countries? countries.map((elem,i)=>{
               return <Card key={elem.Id}
                            name={elem.Name}
                            region={elem.Region}
                            img={elem.Img}/>
           }):<p>No countries</p>}
       </div>
)
}