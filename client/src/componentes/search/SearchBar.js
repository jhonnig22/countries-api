

import {useDispatch,useSelector} from 'react-redux';
import { useState } from "react";
import Filter from '../filter/Filter.js'


export default function SearchBar(props){
let dispatch = useDispatch();


let state = useSelector(state=>state); //estado del redux

const [stateInput,setState]=useState({}); // estado actual del compnente para filtrar


// function filterActivity(e){

//     if(e.target.value ==='none'){
//         setState({...stateInput,filterRegion:state.countries.data});
//     }
//     else{
        
//         setState({...stateInput,filterRegion:stateInput.filterRegion.filter(
//         elem=>{
//             for(let i= 0; i<elem.Activities.length;i++){
//                 if(elem.Activities[i].Name=== e.target.value){
                    
//                     return true
//                 }
                
//             }
//         })});
//         }
//     }
    
    


// function filterRegion(e){ //funcion para filtrar el estado actual y mostrarlo
// if(e.target.value==='All'){
//     setState({...stateInput,filterRegion:state.countries.data});
    
// }
// else    
// setState({...stateInput,filterRegion:state.countries.data.filter(elem=>elem.Region=== e.target.value)});
// console.log(e.target.value);
// }



return(
    <div>
        <div>
            <form>
                <label htmlFor='search'>Search:</label>
                <input  type='text'
                        placeholder='input search country'
                        id='search' 
                        name='search'/>
                <input  type='submit'
                        value='Search'/>        
            </form>
        </div>
            <Filter />
                  
        <div>
           
        </div>

    </div>
)

}