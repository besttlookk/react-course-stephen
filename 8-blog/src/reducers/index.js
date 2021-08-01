import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    posts: postsReducer,
    users:usersReducer
})


// ====================Rules of reducers
/*
Must return ant value "besides" "undefined".

When we first start up a redux applicaton each reducer is automatically called exactlt one time.To specifiy some default state value.

First time the reducer is called using the initialization process it is going to receive two argument.
The first arument will have the value of undefined. and the second argument will be some action object.
It then return some initial state value.

The the second time reducer ran...the first argument will no longer will be uundefined...it will be equal to what ever the reducer returened the last time(last state)

Produces "state" or data to be used inside of your app using only previous state and the action(reducers are pure)

Must not return reach 'out of itself' to decide what value to return[we are not suppose to make API request or reach file from the hard drive]. It should always look into "previous state" and action to decide what should be the next state

Must not mutate its input "state" argument

*/