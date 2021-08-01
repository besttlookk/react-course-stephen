import React from 'react'

import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import Header from './Header'

import history from '../history'

import {Router, Route, Switch} from 'react-router-dom'

const App = () => {
    return (
        <div>
            {/* we should not use Link outside the router */}
            {/* <Header /> */}
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={StreamList}/>
                        <Route path='/streams/new' exact component={StreamCreate}/>
                        <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                        <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                        <Route path='/streams/:id'  exact component={StreamShow}/>
                    </Switch>
                   
                </div>
            </Router>
            
        </div>
    )
}

export default App

// =======How react-router works
/*
When we create an application and loaded it inside the browser we created an instamce of "BrowserRouter" Component.
BrowserRouter interally creates an object of its own called "history" object
History object keeps track of the address bar in our browser.
It will look into the URL and extract everything after "domain name" and port number.It will compunicate that to browserRouter

BrowserRouter than communicate that  path down to "Route" components.
Route component then decides whether to show themself or hide themself depending on the URl the user is visting 

*/