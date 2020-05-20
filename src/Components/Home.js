 import Search from '../Containers/search'
import React from 'react' ;
import   CarsList  from '../Containers/Cars'

const  Home =(props)=>{

    return(
      <div>
         
         <Search/>
         <CarsList history= {props.history}/>

      </div>
    )



}
export default Home ;