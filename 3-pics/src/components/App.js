import React from 'react'
// import axios from 'axios'
import unsplash from '../api/unsplash'
import ImageList from './imageList'
import SearchBar from './SearchBar'

class App extends React.Component {

    state = {images: []}

    onSearchSubmit = async(term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
            
        })

        console.log(response.data.results)
        this.setState({images: response.data.results})
    }
    render(){
        return (
            <div className='ui container' style={{marginTop:"10px"}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )

    }
}

export default App
