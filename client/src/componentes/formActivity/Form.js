import { useSelector } from "react-redux"
import { useState, useEffect  } from "react";
export default  function FormActivity(props){
   
let countris = useSelector(state=>state.countries);

const[state,setState]=useState({Name:""});

const handlerState=function (e) {
    setState({...state,[e.target.name]:e.target.value})
    
}

return(
    <div>
        <div>
            <form>
                <div>
                     <label htmlFor="Name">Name:</label>
                     <input type="text" id='Name' placeholder="Name" name="Name" onChange={handlerState}/>
                </div>
               
                <div>
                    <label htmlFor="Difficulty">Difficulty:</label>
                     <input type="number" name='difficulty' id="Difficulty" max="5" min="1" defaultValue="1"/>
                </div>
               
                <div>
                     <label htmlFor="Season">Season</label>
                     <input type="text" name='season' id="Season" placeholder="Season"/>
                </div>

                <div>
                     <label htmlFor="Duration">Duration</label>
                     <input type="text" name='duration' id="Duration" placeholder="Duration"/>
                </div>

                <div>
                      <span>Select Country</span>
                     
                </div> 

                <div>
                    <input type="submit" value='Save'/>
                </div>    
            </form>
        </div>

    </div>
)

}