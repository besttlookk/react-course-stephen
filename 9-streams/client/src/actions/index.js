import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types'

import streams from '../apis/streams'
import history from '../history'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}


// getState function allows us to reach into redux store
export const createStream =  formValues => async (dispatch, getState) => {
    const {userId} = getState().auth
    const response = await streams.post('/streams', {...formValues, userId})
    dispatch({type: CREATE_STREAM, payload: response.data})
    // we want user to navigate to home screen after sucessfully creating the stream...thst is calles PROGRAMATIC NAVIGATION
    // get user back to the root route
    //  but we dont have access to "History" object outside the components
    // history bar keeps track of address bar in our browser...but history object also has the ability to chnage the address bar as well(and thats how we goona do programtic navigation)
    // "browserRouter" listen to "history" for the change to the URL

    // but the problem is history object is created by the "BrowserRouter"

    // one way is to pass history object to action creator...through the component(while calling that action creator)..but this is not super ideal

    // we will create "history" object...and plain router
    history.push('/')
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams')
    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`)
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`)
    dispatch({type: DELETE_STREAM, payload: id})
    history.push('/')
}
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues)
    dispatch({type: EDIT_STREAM, payload: response.data})
    history.push('/')
}