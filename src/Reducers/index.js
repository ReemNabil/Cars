
import {combineReducers} from 'redux' ;
 import carslist from './Cars-list' ;
 import  carDetails  from './Cardetails';
 export default  combineReducers({
     cars : carslist  ,
     details : carDetails
 })