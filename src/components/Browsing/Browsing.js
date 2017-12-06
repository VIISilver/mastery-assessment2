import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAnimals, buttonMessage } from './../../ducks/reducer';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Browsing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animalInfo: '',
            buttonMessage: 'Local State'
        }
    }

    componentDidMount() {
        this.props.getAnimals();
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            buttonMessage: newProps.message
        })
    }

    render() {
        const animals = this.props.animals;
        const animalList = animals.map((animal, i) => {
            return (
                <div className='eachAnimal' key={i}>
                    <p>Animal Name:</p><p>{animal.genus}</p>
                    <p>Species:</p><p>{animal.species}</p>
                    <p>Description:</p><p>{animal.description}</p>
                </div>
            )
        })
        return (
            <div >
                <Header />
                <h1>{this.state.buttonMessage}</h1>
                <button onClick={this.props.buttonMessage}>Fun</button>
                <Link to='/details'>
                    <h1>Browsing</h1>
                </Link>
                {animalList}
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