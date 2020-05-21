

export default function list(state = [], action) {
  if (action.type == 'CARSList'){
         return action.payload

    }
    console.log(' No CARS')

     return state;


}