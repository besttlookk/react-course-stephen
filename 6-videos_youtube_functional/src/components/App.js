import React,{useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
// import youtube from '../apis/youtube'

import useVideos from '../hooks/useVideos'

const App =() => {
    // const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('buildings')

    // const onTermSubmit = async(term) => {
    //     const response = await youtube.get('/search',{
    //         params: {
    //             q: term
    //         }
    //     })

    //     setVideos(response.data.items)
    //     setSelectedVideo(response.data.items[0])
        
    // }

    // useEffect(()=>{
    //     onTermSubmit('buildings')
    // },[])

    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos])

    return (
        <div>
            <SearchBar onTermSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />

                    </div>

                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>

                    </div>

                </div>
            </div>
        </div>

    )
}


export default App


// ==================Custom Hooks =========================
/*
Best way to creat reusable code in a React project(besides component)

Created by extracting hook-related code out of a function component[and not JSX part..for that we use Component]

Custom hooks always make use of atleast one primitive hook[useState, useEffect] internally.

Each custom hook should have one purpose

Kind of an art form

Data-fetching is a great thing to try to make reusable


//---------General process for creating Reusable Hooks
Identify each line of code related to some single purpose

Identify the input to that code

Identify the outputs to that code

Extract all of the code into a seprate function, receiving the inputs asarguments, and returnong the outputs

*/