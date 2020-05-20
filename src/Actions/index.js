
import axios from 'axios';
const baseURl = "http://localhost:5000/cars";
export function getcars(brand = "") {
    //fetchApi
    console.log('getCars action')
    let data = axios.get(`${baseURl}?brand=${brand}`)
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        })
    return {
        type: 'CARS',
        payload: data
    }

}

export function getCardetails(id = 1) {
    let data = axios.get(`${baseURl}/${id}`)
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((err) => {
            console.log(err)
        })
    return {
        type: 'CAR_Details',
        payload: data
    }

}
//  http://localhost:5000/cars