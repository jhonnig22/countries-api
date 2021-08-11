
import axios from 'axios';
import {rutas} from './rutas';

export const GET_COUNTRIS = 'GET_COUNTRIS';
export const GET_ACTIVITY = 'GET_ACTIVITY'; 
export const GET_COUNTRY_REGION="GET_COUNTRY_REGION";
export const GET_ORDER ="GET_ORDER";
export const GET_ACTIVITY_COUNTRY = 'GET_ACTIVITY_COUNTRY';
export const GET_POPULATION = 'GET_POPULATION';
export const LOADIG = 'LOADING';
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
