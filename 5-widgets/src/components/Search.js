import React, {useState, useEffect} from "react"
import axios from 'axios'

const Search = () => { 

    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])


    useEffect(()=>{
        const timerId = setTimeout(()=> {
            setDebouncedTerm(term)
        },1000)

        return ()=>{
            clearTimeout(timerId)
        }
    },[term])

    useEffect(()=>{
        const search = async () => {
            const { data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })

            setResults(data.query.search)
        }
        if(debouncedTerm){

            search()
        }
    },[debouncedTerm])

    // we are not allowed to mark arrow function in useEffect as async[its not allowed].
    // there are three sloution for that: 1. Declare helper function 2.Declare helper function and imidiatly invoke, 3. Use promise

    // useEffect is allowed to return only one function [cleanup function], which will run just before the component rerenders automatically 
    // useEffect(()=>{
    //     const search = async () => {
    //         const { data} = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params:{
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         })

    //         setResults(data.query.search)
    //     }

    //     if(term && !results.length){
    //         search()
    //     }else{
    //         const timeoutId = setTimeout(()=> {

    //             if(term){
    
    //                 search()
    //             }
    //         },1000)
            
    
    //         return ()=> {
    //             clearTimeout(timeoutId)
    //         }
    //     }
    // },[term])

    const renderResults = results.map(result => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="constent">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* we are getting html as resposnse  */}
                    {/* {result.snippet}  */}
                    {/* only do this as below if you turst the infoi provider. bcopz there is the risk os XSS attack*/}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>

                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={(e)=> setTerm(e.target.value)}/>
                </div>
            </div>

            <div className="ui celled list">
                {renderResults}
            </div>

        </div>
    )
}

export default Search