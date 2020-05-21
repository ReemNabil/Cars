import React from 'react';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './Reducers'




// Router 

import {
    BrowserRouter as Router, Route
    , Switch
} from 'react-router-dom'
import Home from './Components/Home';
import CarDetails from './Containers/car-details';
// import CarDetails from './Containers/Cars';
// import CarsList from './Containers/Cars' ;

import Nav from './Components/nav';


// add middle ware to handel Async Await 
import promiseMW from 'redux-promise' ;

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
export default class App extends React.Component {


    render() {
        return (

            <Provider store={createStoreWithMW(rootReducers)} >
                <Router>
                <Nav/>

                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <Switch>
                                <Route path="/cars/:id" component={CarDetails} />
                                <Route path="/cars" component={Home} />

                                    <Route path="/" component={Home} />



                                </Switch>


                            </div>

                        </div>

                    </div>
                </Router>

            </Provider>
        )
    }



}
