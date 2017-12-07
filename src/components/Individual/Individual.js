import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Individual extends Component {
    render(props) {
        const employee = this.props.employess.get(
            parseInt(props.match.params.number, 10)
          )
          if (!employee) {
            return <div>Sorry, but the player was not found</div>
          }
        return (
            <div >
                <Header />
                <h1>Individual Employee</h1>
                <div>
                    <h1>{employee.name} (#{employee.number})</h1>
                    <h2>Position: {employee.position}</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Individual);