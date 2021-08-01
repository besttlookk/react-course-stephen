import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types'

import _ from 'lodash'


// ===here we will use object based reducers
/*
streamReducer = {
    1: {stream with id 1},
    2: {stream with id 2},
    3: {stream with id 3}
}

this way it willbe very easy to update (bcoz we dont have to use map) or removing(no use of filter)

for deleting  a stream we will use "lodash" library
omit function return new object

"mapKeys" is a function from a lodash..which convert array into object..

*/

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_STREAM:
            return {...state , [action.payload.id] : action.payload}

        case CREATE_STREAM:
            return {...state , [action.payload.id] : action.payload}
        
        case EDIT_STREAM:
            return {...state , [action.payload.id] : action.payload}

        case DELETE_STREAM: 
            return _.omit(state, action.payload)

        default:
            return state
    }

}