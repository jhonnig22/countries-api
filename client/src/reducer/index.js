import {GET_COUNTRIS,GET_ACTIVITY,GET_COUNTRY_REGION,GET_ORDER} from '../actions/index';


const initialState={
    countries:[],
    activities:[],
    coutryRegion:[]
};

export default function rootReducer(state = initialState,action){
if(action.type === GET_COUNTRIS){

    return {...state,countries:action.payload.data.sort()};
}

if(action.type === GET_ACTIVITY){
    return{...state,activities:action.payload}
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