
import {useState,useEffect} from 'react'
import{useDispatch,useSelector} from 'react-redux';
import {getCountryRegion,getOrder,getActivity} from '../../actions/index';
import ContenedorCars from "../contenedorCard/ContenedorCards";


export default function Filterselect(props){
    const dispatch = useDispatch();   
    const [optionState,setOptionState]=useState({optionOrder:'A',
                                                 ini:0,
                                                 fin:9 });
    
    
    useEffect(()=>{
        dispatch(getActivity());
    }
    ,[])
     
    let state=useSelector(state=>state);   
   
     // e == al evento que se disparo q hace referencia al elemento
        const handlerOption= function(e){ //funcion que dispara al selecionar una opcion para filtrar
        dispatch(getCountryRegion(e.target.value))
        dispatch(getOrder(optionState.optionOrder));  
        setOptionState(optionState =>({...optionState,ini:0,fin:9}))
        }
        
        const handlerOrder = function(e){
           
        dispatch(getOrder(e.target.value));
        setOptionState(optionState =>({...optionState,optionOrder:e.target.value,ini:0,fin:9}))

        }
        
        const next = function(){
        if(optionState.fin<state.coutryRegion.length){
             setOptionState(optionState =>({...optionState,ini:optionState.ini+9,fin:optionState.fin+9}));
        }
        else{
            alert('no hay mas paises');
        }
        }
        const prev = function(){
            if(optionState.ini>0){
                 setOptionState(optionState =>({...optionState,ini:optionState.ini-9,fin:optionState.fin-9}));
            }
           else{
               alert('no hay mas paises');
           }
           }
       
     
//     }
    return(
        <div>
            <div>
                <select name='selectRegion' onChange={handlerOption}>
                    <option value="All">All</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>
            </div>
           <div>
               <select name='selectOrder' onChange={handlerOrder}> 
                   
                   <option value="A">A-Z</option>
                   <option value="Z">Z-A</option>

               </select>
           </div>
            <div>
            <select name='selectActivity'>
                <option value="none">none</option>
                {state.activities.map((activity,indi)=>{
                    return <option key ={indi}value={activity.Name}>{activity.Name}</option>
                })}
                
                </select>
            </div>
            
            <div>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>

            <div>
            <ContenedorCars countries={state.coutryRegion.slice(optionState.ini,optionState.fin)}/>
            </div>
        </div>
    )
}