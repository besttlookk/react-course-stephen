import React, {Component} from 'react'

import {connect} from 'react-redux'
import {selectSong} from '../actions' 

// whenever user clicks on one of the select button..we somehow try to select that song.
// what we really wanna do is to update the state or data of the store
// anytime we try to update store..we have to call action creator.
class SongList extends Component {
    renderList(){
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}    
                        >Select</button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render(){
        console.log(this.props)
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

// we can name this function what ever we want..but conventionally we call it "mapStateToProps"
// it basically takes all the state from the store and convert into props for this component
const mapStateToProps = (state) => {
    // console.log(state)
    // in this component we are only concerned with the list of songs

    return {songs: state.songs};  // with this line... this.props === {songs: state.songs}
}

export default connect(mapStateToProps, {selectSong})(SongList) // connect is returning a function and we are calling that function with "SongList" as the argument



// ===================Redux is Not Magic
/*
Redux does not automatically detect action creators being called

Redux does not automatically detect a function returning an object is an "action"

*/