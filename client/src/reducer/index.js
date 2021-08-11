import {GET_COUNTRIS,
    GET_ACTIVITY,
    GET_COUNTRY_REGION,
    GET_ORDER,
    GET_ACTIVITY_COUNTRY,
    GET_POPULATION,LOADIG} from '../actions/index';


const initialState={
    countries:[],
    activities:[],
    coutryRegion:[],
    loading :false
};

export default function rootReducer(state = initialState,action){


if(action.type ===LOADIG){
    return{...state,loading:true};
}

if(action.type === GET_COUNTRIS){

    return {...state,countries:action.payload.data.sort(),loading:false,coutryRegion:action.payload.data.sort()};
}

if(action.type === GET_ACTIVITY){
    return{...state,activities:action.payload}
}

if(action.type === GET_ACTIVITY_COUNTRY){

    if(action.payload ==='none'){
        return {...state,coutryRegion:state.coutryRegion}
    }
    else{
        return {...state,coutryRegion:state.coutryRegion.filter((country)=>{    

                  
                       for(let i =0; i<country.Activities.length; i++){

                          if(country.Activities[i].Name===action.payload){
                          return true
                      }
                    }
                        
        })}
    }
    
}
if( action.type === GET_POPULATION){


    if(action.payload ==='population'){

        return {...state,coutryRegion:state.coutryRegion.sort((a,b)=>{
        if(a.Population > b.Population){
            return -1
        }
        if(a.Population<b.Population){
            return 1
        }
        return 0;
    })}
    }
    else{
        return {...state,coutryRegion:state.coutryRegion};
    }

}
if(action.type === GET_COUNTRY_REGION){

    if(action.payload==='All'){
        return {...state,coutryRegion:state.countries};
    }
    else{
        return{...state,coutryRegion:state.countries.filter(e=>{
        return e.Region === action.payload
    })}
    }
    
}

if(action.type === GET_ORDER){
    if(action.payload ==='A'){
      return  {...state, coutryRegion:state.coutryRegion.sort((a,b)=>{
     if(a.Name > b.Name){
         return 1;
     }
     if(a.Name < b.Name){
       return -1;
   }
   return 0;
 })};
}
   else{
      return{...state,coutryRegion:state.coutryRegion.reverse()
    }
}
}


return state;
}