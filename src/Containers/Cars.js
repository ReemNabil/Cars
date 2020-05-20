
import CarItem from '../Components/Car-item'
 import React from 'react' ;
import {connect} from 'react-redux'

const  CarsList =(props)=>{
const renderList =({cars})=>{
  if(cars.length >0)
     return cars.map((car)=>{
           return <CarItem history= {props.history} key={car.id} car ={car} />
     })


     return <h1 className="text-center m-5 "> No Cars </h1>
}
    return(
      <div>
             {renderList(props)}
      </div>
    )



}

 const mapStateToProps=(state)=>( {
  cars : state.cars

})
 

export default  connect(mapStateToProps)(CarsList)  ;