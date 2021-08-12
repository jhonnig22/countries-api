
import {useState,useEffect} from 'react'
import{useDispatch,useSelector} from 'react-redux';
import {getCountryRegion,getOrder,getActivity,getActivityCountry,getPopulation,getCountris} from '../../actions/index';
import ContenedorCars from "../contenedorCard/ContenedorCards";
import Loading from '../loading/Loading';
import style from './filter.module.css'
export default function Filterselect(props){
    const dispatch = useDispatch(); 
     let state=useSelector(state=>state);   
    
    const [optionState,setOptionState]=useState({optionOrder:'A',
                                                 ini:0,
                                                 fin:9,
                                                 activity:'none',
                                                 region:'All',
                                                 population:'none'});
    
    
    useEffect(()=>{
        dispatch(getCountris());
        dispatch(getActivity());
    }
    ,[])//el array vacio es para que solo se ejecute una vez, al montar el componente
     
   
   
     // e == al evento que se disparo q hace referencia al elemento
        const handlerOption= function(e){ //funcion que dispara al selecionar una opcion para filtrar
        dispatch(getCountryRegion(e.target.value));
        dispatch(getOrder(optionState.optionOrder));  
        dispatch(getActivityCountry(optionState.activity));
        dispatch(getPopulation(optionState.population));
        setOptionState(optionState =>({...optionState,ini:0,fin:9,region:e.target.value}));
        }
        
        const handlerOrder = function(e){
           
        dispatch(getOrder(e.target.value));
        setOptionState(optionState =>({...optionState,optionOrder:e.target.value,ini:0,fin:9}));

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
        const activity=function(e){

            dispatch(getCountryRegion(optionState.region))
            dispatch(getActivityCountry(e.target.value))
            
            setOptionState(optionState=>({...optionState,activity:e.target.value}))
            
        }

        const population= function(e){
            dispatch(getCountryRegion(optionState.region));
            dispatch(getPopulation(e.target.value));

            setOptionState(optionState=>({...optionState,population:e.target.value}));
        }
//     }
    return(
        <div>
            
            <div className={style.contenedorFilter}>
                <div><span>Region</span>
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
                    <div><span>Activity</span>
                        <select name='selectActivity' onChange={activity}>
                            <option value="none">none</option>
                                {state.activities.map((activity,indi)=>{
                                 return <option key ={indi}value={activity.Name}>{activity.Name}</option>
                                     })}
                        
                        </select>
                    </div>


                <div>
                    <span>population</span>
                    <select name='population' onChange={population}>
                        <option value='none'>none</option>
                        <option valule ='population'>population</option>
                    </select>
                </div>


               
            </div> 
                <div>
                    <button onClick={prev}>Prev</button>
                    <button onClick={next}>Next</button>
                </div>   
                <div>
                   
                    {state.loading ? <Loading></Loading>:<ContenedorCars countries={state.coutryRegion.slice(optionState.ini,optionState.fin)}/>}
                
                </div>
        </div>
    )
}