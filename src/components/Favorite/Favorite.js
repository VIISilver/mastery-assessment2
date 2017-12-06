import React from 'react';

const Favorite = ({ animals }) => {
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
        <div>
            {animalList}
        </div>
    )
}

export default Favorite;