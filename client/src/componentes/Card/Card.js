import style from './Card.module.css'
export default function Card(props){

 return(
     <div className={style.contenedor}>
         <div>
             <div className={style.contenedorImg}>
                 <img src={props.img} className={style.imgCountry} />
             </div>
             
             <div className={style.contenedorTitulo}>
                 <h2>{props.name}</h2>
                 <p>{props.region}</p>
             </div>
         </div>
     </div>
 )   
}