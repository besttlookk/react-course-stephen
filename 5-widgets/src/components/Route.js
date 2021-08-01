// import React from 'react' 
// as we have not written any JSX in this file we dont have to import react


// here we need to listen the the event. for that we will use useEffect
import {useEffect, useState} from 'react'

const Route = ({path, children}) =>{

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    // usually we want to handle the event handler only one time
    useEffect(()=>{
        const onLocationChange = () => {
            // console.log('Location Change')
            setCurrentPath(window.location.pathname)
        }
        // popstate event is made by us..so that when event this event happens we can change value of 
        // current path so that current thing cab be visivble to the user
        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    },[])
    // return window.location.pathname === path ? children : null
    return currentPath === path ? children : null
}
export default Route