import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getcars } from '../Actions'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            brand: ''

        }
    }

    brandChange = (e) => {
        this.setState({ brand: e.target.value })
    }
    Search = (e) => {
        e.preventDefault()
        console.log(this.state.brand)
        this.props.getcars(this.state.brand)
        console.log(this.props)

    }

    render() {
        return (
            <form className="border-bottom m-4 p-4">
                <div className="form-group">
                    <input type="text" placeholder="Search"
                        onChange={this.brandChange}
                        className="form-control rounded-pill" />
                </div>
                <div className="form-group">

                    <button onClick={this.Search} className="border-bottom center btn btn-dark w-15 
                        "> Search </button>
                </div>

            </form>
        )
    }


}

const mapDispatchToProps = (dispatch) => {
    //call action creator or map action creator 
    return bindActionCreators({ getcars }, dispatch)
    // put getcars in props as action
}
//mapStateToProps   // if componenet need to be awer of the state
// if not statless component

export default connect(null, mapDispatchToProps)(Search) 