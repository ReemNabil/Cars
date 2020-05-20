

export default function carslist (state = [] , action) {

     if (action.type ===  'CARS'){

     return action.payload 
}

return state ;

}