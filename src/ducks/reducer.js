import axios from 'axios';

// INITIAL STATE
const initialState = {
    animals: [{}]
}

// CONSTANTS THAT REPRESENT ACTIONS
const FULFILLED = '_FULFILLED';
const GET_ANIMALS = 'GET_ANIMALS';

// ACTION CREATORS
export function getAnimals() {
    console.log('Get Animals fired');
    const allAnimals = axios.get('/api/animals')
        .then(res => {
            return res.data
        })
    return {
        type: GET_ANIMALS,
        payload: allAnimals
    }
}

// REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ANIMALS + FULFILLED:
            return Object.assign({}, state, { animals: action.payload })
    }
}