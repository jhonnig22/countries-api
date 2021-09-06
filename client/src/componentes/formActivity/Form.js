import { useSelector } from "react-redux"
import { useState, useEffect  } from "react";
import axios from 'axios';
import style from './form.module.css'

export default  function FormActivity(props){
   
let countris = useSelector(state=>state.countries);

const[state,setState]=useState({Name:"",
                                difficulty:'',
                                season:'all year',
                                duration:'',
                                includeCountry:[]});

const [error,setError] =useState({});




const handlerState=function (e) {
    setState(state=>({...state,[e.target.name]:e.target.value}));
    setError(validate({...error,[e.target.name]:e.target.value}));
}

const submitData=function(e){
    e.preventDefault();

    if(state.Name ===''){
        alert('No se puede enviar datos en blanco');
    }
    else{
        let activity ={
      Name:state.Name,
      Difficulty: parseInt(state.difficulty),
      Duration:state.duration,
      Season:state.season,
      countris:state.includeCountry.map(country=>{
          return country.Id
      })
     
  }
    console.log(activity.countris);

  axios.post('http://localhost:3001/activity',activity)
  .then(alert('succes'));  
    }
  
    
}

const addCountry=function(e){
    let indice = countris.filter(country=>country.Id ===e.target.value) //tomo el indice el la opcion dentro del select para sacar el nombre del pais
    
    
    let country ={
                    Id:indice[0].Id,
                    Name:indice[0].Name,
                    Img:indice[0].Img


    }
    
 setState(state=>({...state,includeCountry:[...state.includeCountry,country]}))

}

const validate = function(input){ //funcion para validar el input
let error={}    
if(!/^[A-Z ]+$/i.test(input.Name)|| input.Name===''){
    error.Name ='Name is invalid';
}
else if(input.duration ===''){
    error.duration = 'enter text';
}

return error;
}

const deleteCountry=function(e){
    setState(state=>({...state,includeCountry:state.includeCountry.filter(country=>country.Id !==e.target.id)}))
}

console.log(state.includeCountry);
return(
    <div className={style.contenedorPrincipal}>
        <div className={style.formContenedor}>
            <form onSubmit={submitData} className={style.form}>
                <h3>Form- Add Activity</h3>
                <hr className={style.linea}/>
                <div>
                     <label htmlFor="Name" className={style.label}>Name:</label>
                     <input type="text" id='Name' placeholder="Name" name="Name" onChange={handlerState} className={style.inputForm}/>
                     {!error.Name ? <span>&#10004;</span>:<span>{error.Name}</span>}
                </div>
            
                <div>
                    <label htmlFor="Difficulty" className={style.label} >Difficulty:</label>
                     <input className={style.inputForm} type="number" name='difficulty' id="Difficulty" max="5" min="1" defaultValue="1" onChange={handlerState}/>
                </div>
               

                <div>
                        <label htmlFor="Season" className={style.label} >Season</label>
                        <select className={style.inputForm} name='season' id="Season" onChange={handlerState}>

                            <option value='all year'selected >all year</option>
                            <option value='spring' >spring</option>
                            <option value='summer'>summer</option>
                            <option value='fall'>fall</option>
                            <option value='winter'>winter</option>
                            
                        </select>
                </div>
             
                <div>
                     <label htmlFor="Duration" className={style.label} >Duration</label>
                     <input className={style.inputForm} type="text" name='duration' id="Duration" placeholder="Duration" onChange={handlerState}/>
                     {!error.duration ? <span>*</span>:<span>{error.duration}</span>}
                </div>
          

                <div>
                      <span className={style.label}>Select Country</span>
                        <select  className={style.inputForm} onChange={addCountry}>
                            {countris.map((country,i)=>{
                                return <option key={i} value={country.Id}>{country.Name}</option>
                            })}

                        </select>
                </div> 
             

                <div>
                    <input className={style.buttonSubmit} type="submit" value='Save'/>
                </div>    
            </form>
        </div>
        <div className={style.contenedorSelected}>
            {state.includeCountry.length ===0 ? <span className={style.label}>select a country</span>:
            state.includeCountry.map(country=>{
                return  <div className={style.contenedor}>
                            <img className={style.bandera} src={country.Img} />
                            <span className={style.nameCountry} id={country.Id}>{country.Name}</span>
                            <button id={country.Id} 
                                    onClick={deleteCountry}
                                    className={style.close}>x</button>
                        </div>
            })
            }
        </div>                        
    </div>
)

}