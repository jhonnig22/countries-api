import style from './Card.module.css'
export default function Card(props){

 return(

     <div className={style.contenedor}>
         <div >
             <div className={style.contenedorImg}>
                 <img src={props.img} className={style.imgCountry} />
             </div>
             
             <div className={style.contenedorTitulo}>
                 <h4>{props.name}</h4>
                 <p>{props.region}</p>
             </div>
             <div className={style.footercard}>
                 
             </div>
         </div>
     </div>
 )   
}