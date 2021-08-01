import React from 'react'
import { connect } from "react-redux";

// import {fetchUser} from '../actions'

class UserHeader extends React.Component {

    // we dont want this anymore
    // componentDidMount(){
    //     this.props.fetchUser(this.props.userId)
    // }
    render(){
        // const user = this.props.users.find(user => user.id === this.props.userId)

        const {user} = this.props

        if(!user){
            return null
        }
        return (
            <div className='header'>
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // rather than getting all the user name to the component..if try to get only particular user name
    
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

// export default connect(mapStateToProps, {fetchUser})(UserHeader)
export default connect(mapStateToProps)(UserHeader)