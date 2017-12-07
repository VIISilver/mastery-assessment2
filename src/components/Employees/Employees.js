import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Employees extends Component {
  render() {
    return (
      <div >
          <Header />
          <h1>Employees</h1>
          <ul>
      {
        this.props.employees.map(p => (
          <li key={p.number}>
            <Link to={`/employees/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Employees);