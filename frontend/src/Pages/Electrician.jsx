import Head from "./Head"
import Foot from "./Foot"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Worker from "./Worker"
import {v4 as uuidv4} from "uuid"

function Electrician(){
    const location=useLocation();
    const data=location.state

    const [workers,setData]=useState(data)
    return(
        <>
        <Head />
        <div className="worker-container">
        {
            workers.map((worker)=>{
                return(
              <Worker
                key={uuidv4()}
                name={worker.name}
                job={worker.job}
                phone={worker.phone}
                experience={worker.experience}
                rating={worker.rating}
                age={worker.age}
                loc={worker.loc}
                
                /> 
                )
                
            })
        }
        </div>
        <Foot />
        </>
    )
}

export default Electrician