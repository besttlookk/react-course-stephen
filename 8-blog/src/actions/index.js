import jsonplaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

// bad approch[actions must be plain object & Use custom middleware for async actions]
// export const fetchPosts = async() => {

//     const response = await jsonplaceholder.get('/posts')
//     return{
//         type:"FETCH_POSTS",
//         payload: response
//     }
// }


// export const fetchPosts = () => {

//     return async function(dispatch, getState){
//         const response = await jsonplaceholder.get('/posts')
        
//         // we dont have to return object from here[action], rather we dispatch that action manually.
//         // we never return anythinhg from this inner-function
//         dispatch({type: "FETCH_POSTS", payload: response})
//     }
// }

// refactor of above 

export const fetchPosts = () => async dispatch => {
        const response = await jsonplaceholder.get('/posts')

        dispatch({type: "FETCH_POSTS", payload: response.data})

}

export const fetchUser = (id) => async dispatch => {
        const response = await jsonplaceholder.get(`/users/${id}`)

        dispatch({type: "FETCH_USER", payload: response.data})
}

// we cant memorize both inner or outer function
// bcoz if we memorize outer function...we always get inner-function in return..which inturn is called by redux-thunk
// if we memorize inner function every time it memorize new instanse of the function.

// so we create outer function...

// export const fetchUser = function(id) {

//         return async function(dispatch) {
//         const response = await jsonplaceholder.get(`/users/${id}`)

//         dispatch({type: "FETCH_USER", payload: response.data})
//         }
// }


// One time memorization[hard way solution]
// with this solution we only get user with one id only once...even if it has been changed.
// export const fetchUser = (id) => dispatch => {
//         _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async(id, dispatch) => {
//         const response = await jsonplaceholder.get(`/users/${id}`)

//         dispatch({type: "FETCH_USER", payload: response.data})
// })


// --taking second approch to achieve same thing as above
/*
fetchPostsAndUsers() 
        Step 1:Call 'fetchPosts'
        Step 2:Get list of posts
        Step 3:Find all unique userIDs from list of posts
        Iterate over unique userId's
        Call 'fetchUser' with each userId
*/


export const fetchPostsAndUsers = () => async (dispatch, getState)=>{
        // inside this we are going to call fetchPosts and fetchUser Mutiple times.
        // so when we call this action creator that is the only creator we are going to call.
        // which means we need to dispatch some action here
        // Step 1
        await dispatch(fetchPosts())
        // Step 2 
        // console.log(getState().posts)
        // here we gonna use lodash verson of map
        // const userIds = _.uniq(_.map(getState().posts, 'userId')) // to get only unique userID
        
        // userIds.forEach(id=> dispatch(fetchUser(id)))

        // lodash chaining
        _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value() //to execute all the cahining steps

}




// async action creator vs async action creator
/*
sync action creator instantly return an action with data ready to go

while async takes some amount of time for it to get its data ready to go.
anytime we need to make network request...it is going to be async action creator.
if we want to make async action creator we need middleware


// redux cycle for async
Action creator ==> Action ==> dispatch ==> middleware ==> Reducers ==> State


// Middleware in redux
Function that gets called with every action we dispatch

has the ability to STOP, MODIFY, or otherwise mess around the actions.

Tons of open sourse middleware exist

most popular use of middleware is for dealing with async actions[redux-think]


// Normal rules for action creator
Action creator MUST return action.
Action must have a type propery.
Actions can optionally have a "payload"

// Rules with Redux Thunk
Action creators can return action object.

            OR

Action creators CAN return "function".
If an action object gets returned, it must have a type.
If an action object gets returned, it can optionally have a payload.

// What 'redux-thunk" doing behind the scene
Action Creator ==> "something" either an object or function ==> dispatch ==(now in Redux think)==> [redux thunk gonna look on that something and scheck if it is object of function][if it is object it is send to reducers]
==>[if it is a function reux thunk invoke that function with the "dispatch" and "getState"] ==> it wait for our request to finish ==> request complete,dispatch action "manually" ==> New Action ==> dispatch


// if we are returing a function we dont need to return an object from that function. rather we need to call dispatch function manulaly with the action we want to dispatch
*/