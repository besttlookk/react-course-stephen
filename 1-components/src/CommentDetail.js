import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const CommentDetail = (props) => {
    return (

        // ===================Teacher version ================================
        // <div className="comment">
        //     <a href="/" className="avatar">
        //         <img alt='avatar' src={props.avatar}/>
        //     </a>

        //     <div className="content">
        //         <a href="/" className='author'>{props.author}</a>
        //         <div className="metadata">
        //             <span className="date">{props.timeAgo}</span>
        //         </div>

        //         <div className="text">
        //             {props.body}
        //         </div>
        //     </div>
        // </div>

        //  ======================My version ===========================
        <div>
            <Avatar alt="profile pic" src={props.avatar}/>
            <h3>{props.author}</h3>
            <small>{props.createdAt}</small>
            <p>{props.body}</p>
        </div>
    )
}

export default CommentDetail
