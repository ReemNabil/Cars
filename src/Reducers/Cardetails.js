
export default  function carDetails (state = {} , action) {
    if (action.type ===  'CAR_Details'){
    
         return action.payload 
    }
    
    return state ;
    
    }