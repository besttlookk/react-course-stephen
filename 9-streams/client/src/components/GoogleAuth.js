// ==========WITHOUT REDUX ===========================================
// import React, { Component } from 'react'
// // GOOGELE LIBRARY IS NOT AVAILABLE IN NPM ..script tag is added 
// export default class GoogleAuth extends Component {

//     state = {isSignedIn: null}
//     componentDidMount(){
//         // variable "gapi" is available under window scope. We need to write "window".
//         // with "gapi.load" it loads entire  google serive..so we have to specify which gogle service we are interested in.
//         window.gapi.load('client:auth2', ()=> {  //loading  particular library(auth2)
//             // initializing(async)/register to the oAuth library
//             window.gapi.client.init({
//                 clientId: '201613044299-b9sbfpqjr71uln7ej4krr013h6d0juaj.apps.googleusercontent.com',
//                 scope: 'email'
//             }).then(()=> {
//                 // getting a reference of the "auth" object after it is initialized
//                 this.auth = window.gapi.auth2.getAuthInstance()
//                 //  figuring out if the user is currently signed in and putting the value in state
//                 this.setState({isSignedIn: this.auth.isSignedIn.get()})
//                 // listen is a method that we can pass a callback function to..
//                 // if we pass a callback function to listen it will be invoked anytime user authentication status chnages
//                 // we can call ssetState inside the function to change the componnet state
//                 this.auth.isSignedIn.listen(this.onAuthChange)
//             })
//         })
//     }

//     // this callback function is called any time user login status changes     
//     onAuthChange = ()=> {
//         this.setState({isSignedIn: this.auth.isSignedIn.get()})
//     }

//     onSignInClick = () => {
//         this.auth.signIn()
//     }

//     onSignOutClick = () => {
//         this.auth.signOut()
//     }
    
//     renderAuthButton(){
//         if(this.state.isSignedIn === null){
//             return null
//         }else if(this.state.isSignedIn){
//             return (
//                 <button className='ui red google button' onClick={this.onSignOutClick}>
//                     <i className='google icon'/>
//                     Sign Out
//                 </button>
//             )
//         }else {
//             return (
//                 <button className="ui red google button" onClick={this.onSignInClick}>
//                     <i className='google icon' />
//                     Sign In With Google
//                 </button>

//             )
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.renderAuthButton()}
//             </div>
//         )
//     }
// }

// =======================WITH REDUX

import React, { Component } from 'react'
// GOOGELE LIBRARY IS NOT AVAILABLE IN NPM ..script tag is added 
import {connect} from 'react-redux'
import { signIn, signOut } from '../actions'
class GoogleAuth extends Component {

    componentDidMount(){
        // variable "gapi" is available under window scope. We need to write "window".
        // with "gapi.load" it loads entire  google serive..so we have to specify which gogle service we are interested in.
        window.gapi.load('client:auth2', ()=> {  //loading  particular library(auth2)
            // initializing(async)/register to the oAuth library
            window.gapi.client.init({
                clientId: '201613044299-b9sbfpqjr71uln7ej4krr013h6d0juaj.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                // getting a reference of the "auth" object after it is initialized
                this.auth = window.gapi.auth2.getAuthInstance()
                //  figuring out if the user is currently signed in and putting the value in state
                // this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.onAuthChange(this.auth.isSignedIn.get())
                // listen is a method that we can pass a callback function to..
                // if we pass a callback function to listen it will be invoked anytime user authentication status chnages
                // we can call ssetState inside the function to change the componnet state
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    // this callback function is called any time user login status changes     
    // this callback is called with boolean argument...depending on if user is siogned in or not
    onAuthChange = (isSignedIn)=> {
        if(isSignedIn){
            // while signing in..pass the user id
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }
    
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return (
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className='google icon'/>
                    Sign Out
                </button>
            )
        }else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className='google icon' />
                    Sign In With Google
                </button>

            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)