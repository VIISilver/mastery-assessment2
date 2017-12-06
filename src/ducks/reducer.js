import axios from 'axios';

// INITIAL STATE
const initialState = {
    animals: [{}],
    message: 'Not Fun'
}

// CONSTANTS THAT REPRESENT ACTIONS
const FULFILLED = '_FULFILLED';
const GET_ANIMALS = 'GET_ANIMALS';
const BUTTON_MESSAGE = 'BUTTON_MESSAGE';

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

export function buttonMessage() {
    return {
        type: BUTTON_MESSAGE,
        payload: Math.random() * 20
    }
}

// REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ANIMALS + FULFILLED:
            return Object.assign({}, state, { animals: action.payload })

        case BUTTON_MESSAGE:
            return Object.assign({}, state, { message: action.payload })

        default: return state;
    }
}