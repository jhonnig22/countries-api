import load from '../../recursos/images/loader01.gif';
import style from './loading.module.css';
export default function Loading(){

    return( 
        <div >
            <div className={style.contenedor}>
                <p className={style.text}>Loading...</p>
                <img src={load} alt='imagen de carga' className={style.className}></img>
            </div>
        </div>
    )
}