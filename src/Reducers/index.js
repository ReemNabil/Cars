
import {combineReducers} from 'redux' ;
 import carslist from './Cars-list' ;
 import  carDetails  from './Cardetails';
 import list from './list'
 console.log(carslist)

 export default  combineReducers({
     cars : carslist  ,
     details : carDetails,
     list : list
 })