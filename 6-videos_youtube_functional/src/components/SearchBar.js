import React, {useState} from 'react'

const SearchBar = (props) => {

    const [term, setTerm] = useState('')

    const onFormSubmit =(e) =>{
        e.preventDefault()
        // console.log(this.state.term)
        props.onTermSubmit(term)
    }

    return (
            <div className='ui segment search-bar'>
                <form onSubmit={onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Search Video</label>
                        <input 
                            type='text' 
                            onChange={(e) => setTerm(e.target.value)} 
                            value={term} 
                        />
                    </div>

                </form>
            </div>
        )
    
}

export default SearchBar