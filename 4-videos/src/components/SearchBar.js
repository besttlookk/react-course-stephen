import React from 'react'

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onFormSubmit =(e) =>{
        e.preventDefault()
        // console.log(this.state.term)
        this.props.onTermSubmit(this.state.term)
    }

    render(){
        return (
            <div className='ui segment search-bar'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Search Video</label>
                        <input 
                            type='text' 
                            onChange={(e) => this.setState({term: e.target.value})} 
                            value={this.state.term} 
                        />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar