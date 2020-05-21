
import CarItem from '../Components/Car-item'
import React ,  { Component }  from 'react';
import { connect } from 'react-redux'
import * as actions from '../Actions';

class CarsList extends Component {
  constructor() {
      super()
  }
  componentDidMount() {
      //call action creator
      // console.log(this.props)
      this.props.getcarsList()
      }

  renderList({ cars }) {

      if (cars)
          return cars.map((car) => (
              <div key={car.id}>
                  <CarItem history={this.props.history} key={car.id} car={car} />
              </div>
          ))

      return 'No Cars '
  }
 
  render() {
      console.log(this.props)
      return (
          <div >
              {this.renderList(this.props)}
           
              
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cars: state.list

  }
}

export default connect(mapStateToProps , actions)(CarsList);