

export default function carslist(state = [], action) {
     if (action.type === 'CARS') {
          console.log('CARS')
          console.log(action.payload)
          return action.payload
     }
     console.log(' No CARS')

      return state;


}