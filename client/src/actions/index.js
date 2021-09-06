
import axios from 'axios';
import {rutas} from './rutas';

export const GET_COUNTRIS = 'GET_COUNTRIS';
export const GET_ACTIVITY = 'GET_ACTIVITY'; 
export const GET_COUNTRY_REGION="GET_COUNTRY_REGION";
export const GET_ORDER ="GET_ORDER";
export const GET_ACTIVITY_COUNTRY = 'GET_ACTIVITY_COUNTRY';
export const GET_POPULATION = 'GET_POPULATION';
export const LOADIG = 'LOADING';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_COUNTRY_ID ='GET_COUNTRY_ID';

export function  getCountris(){
    return function(dispatch){

        dispatch(loading());
         axios.get(rutas.countries)
        .then( result=>{
                dispatch({
                        type:GET_COUNTRIS,
                        payload: result
                })
        })
    }
}
export function loading(){
    return {
        type:LOADIG
    }
}
export function getActivity(){
    return function(dispatch){
        dispatch(loading())
         axios.get(rutas.activity)
        .then(result=>{
            dispatch({
                        type: GET_ACTIVITY,
                        payload:result.data})
        })
    }
}


export function getCountryRegion(region) {
   
        return {
            type:GET_COUNTRY_REGION,
            payload:region
        }

}
export function getActivityCountry(activity){

    return {
            type:GET_ACTIVITY_COUNTRY,
            payload:activity
    }
} 

export function getPopulation(population){
    
    return{
        type:GET_POPULATION,
        payload:population
    }
}
export function getOrder(order){

    return {
        type:GET_ORDER,
        payload:order
    }
}

export function getCountryId(id){
 return function(dispatch){
     dispatch(loading());
     axios.get(rutas.countryId+id)
     .then(response =>{
         dispatch({
             type:GET_COUNTRY_ID,
             payload:response.data
         })
     })
 }
}
export function getCountryName(name){
   return function (dispatch){
       dispatch(loading())
       axios.get(rutas.countryName+name)
       .then(response =>{
            dispatch({
                type:GET_COUNTRY_NAME,
                payload:response.data
            })
       }).catch(e=>{alert("no se encontro la ciudad")
                        
                        dispatch({
                            type:'error'
                        })})
   }
}