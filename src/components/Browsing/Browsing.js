import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAnimals } from './../../ducks/reducer';
import { connect } from 'react-redux';

class Browsing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animalInfo: ''
        }
    }

    componentDidMount() {
        this.props.getAnimals();
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
        animals: state.animals
    }
}

const mapDispatchToProps = { getAnimals }

export default connect(mapStateToProps, mapDispatchToProps)(Browsing);