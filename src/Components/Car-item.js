import React from 'react' ;

const  CarItem =(props)=>{

    return(
     
       <div className="border text-center shadow p-2 m-2">
       <h3>{props.car.model}</h3> 
       <img  onClick={()=>{
          props.history.push(`/cars/${props.car.id}`)
       }}
        className="w-50 rounded shadow " src={`/images/${props.car.image}`} />

  <h5>  {props.car.brand} Brand</h5> 

 </div> 


    )



}
export default CarItem ;