

import {useDispatch,useSelector} from 'react-redux';
import { useState } from "react";
import Filter from '../filter/Filter.js'
import style from './search.module.css'

export default function SearchBar(props){
let dispatch = useDispatch();


let state = useSelector(state=>state); //estado del redux

const [stateInput,setState]=useState({}); // estado actual del compnente para filtrar



return(
    <div>
        <div className={style.conteiner}>
            <form className={style.form}>
                <label htmlFor='search'>Search:</label>
                <input  className={style.inputText}
                        type='text'
                        placeholder='input search country'
                        id='search' 
                        name='search'/>
                <input  className={style.button}
                        type='submit'
                        value='Search'/>        
            </form>
        </div>
            <Filter />
                  
        <div>
           
        </div>

    </div>
)

}