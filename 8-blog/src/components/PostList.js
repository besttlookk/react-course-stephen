import React, {Component} from 'react'

import {connect} from 'react-redux'

import {fetchPosts, fetchPostsAndUsers} from '../actions'

import UserHeader from './UserHeader'

class PostList extends Component{

    componentDidMount(){
        // this.props.fetchPosts()
        this.props.fetchPostsAndUsers()
    }

    renderList(){
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }
    render(){
        // console.log(this.props.posts)
        return(
            <div className='ui relaxed divided list'>
                {this.renderList( )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts : state.posts}
}

export default connect(mapStateToProps,{fetchPostsAndUsers})(PostList)



// ========General data Loading with Redux
/*
1. Component gets rendered onto the screen

2. Component's "componentDidMount" lifecycle method gets called

3.We call action creator from "componentDidMount"

###Components are generally responsible for fetching data they need by calling an action creator[step 1,2,3]

4.Action creator runs code to make an API request

5. API response with data 

6. Action creator returns an "action" with the fetched data on the "payload" property

###Action creator are responsible for making API requests[This is where Redux-thunk comnes into play][step 5,6]

7.Some reducer sees the action, return the data off the "payload"

8. Because we generated some new state object, redux/react-redux cause our React app to be rendered

### we get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps[step 7, 8]


*/