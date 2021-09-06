

import {useDispatch,useSelector} from 'react-redux';
import { useState } from "react";
import Filter from '../filter/Filter.js'
import style from './search.module.css'
import ContenedorCars from '../contenedorCard/ContenedorCards.js';
import {getCountryName} from '../../actions/index.js';

export default function SearchBar(props){
let dispatch = useDispatch();


let state = useSelector(state=>state.countryName); //estado del redux

const [stateInput,setState]=useState({  search:'',
                                        close:true,
                                       }); // estado actual del compnente para filtrar


const inputSearch=function(e){
setState(state=>({...state,search:e.target.value}));
}



const close = function(){
setState(state=>({...state,close:false}));


}

const submitSearch = function(e){
  e.preventDefault();
  if(stateInput.search ===''){
    setState(state=>({...state,controlInput:'Enter a Country'}))
  }
  else{
     dispatch(getCountryName(stateInput.search));

     setState(state=>({...state,search:'',controlInput:'',close:true}))
    } 
  }
  
console.log(stateInput.controlInput)
return(
    <div>
        <div className={style.conteiner}>
            <form className={style.form} onSubmit={submitSearch}>
                <label htmlFor='search'>Search:</label>
                <input  className={style.inputText}
                        type='text'
                        placeholder='input search country'
                        id='search' 
                        name='search'
                        onChange={inputSearch}/>
                <input  className={style.button}
                        type='submit'
                        value='Search'/>   

                <div>{stateInput.controlInput}</div>             
            </form>
            
        </div>
            <div>
                
                    {// si al buscar tebgo un elemento renderizo el componente con el boton 
                    stateInput.close && state.length>0 ? <div>  
                                            <button className={style.buttonCerrar} onClick={close} >Close</button>
                                            <ContenedorCars countries={state}/>  
                                        </div>
                                        : <div></div> 
                    }
                    
               
                
            </div>    

        

            <Filter />
            
                  
        <div>
           
        </div>

    </div>
)

}