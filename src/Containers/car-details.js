import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCardetails } from '../Actions'
import { bindActionCreators } from 'redux'

class CarDetails extends Component {

    constructor() {
        super()
    }
    renderObject({details}){

          return (
            
                <div className="m-2 p-2 shadow">
                <h2>{details.brand} {details.model} {details.year}</h2>
                <img className="w-100 rounded shadow " src={`/images/${details.image}`} />
                <h4 className="border-bottom">about {details.model}:</h4>
                <p className="mt-4">{details.description}</p>
            </div>
          )
    }
    componentDidMount() {
        // if  Async call
        this.props.getCardetails(this.props.match.params.id)

    }

    render() {
        console.log("  Car Details")

        return (
            <div>
                {this.renderObject(this.props)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { details: state.details }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCardetails }, dispatch)

}



export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)