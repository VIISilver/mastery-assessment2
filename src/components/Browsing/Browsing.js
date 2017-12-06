import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAnimals, buttonMessage } from './../../ducks/reducer';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import './Browsing.css';
import Favorite from '../Favorite/Favorite';

class Browsing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animalInfo: '',
            buttonMessage: 'Local State'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getAnimals();
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            buttonMessage: newProps.message
        })
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val });
    }

    render() {
        const { animalInfo } = this.state;
        return (
            <div>
                <Header />
                <div id='browMain'>
                    <h1>{this.state.buttonMessage}</h1>
                    <button onClick={this.props.buttonMessage}>Fun</button>
                    <div><p>User Name:</p><input value={animalInfo} onChange={(e) => this.handleChange('animalInfo', e.target.value)} /></div>
                    <h1>List of Animals</h1>
                    <Favorite animals={this.props.animals} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        animals: state.animals,
        message: state.message
    }
}

const mapDispatchToProps = { getAnimals, buttonMessage }

export default connect(mapStateToProps, mapDispatchToProps)(Browsing);