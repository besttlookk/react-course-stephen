import React from 'react'

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    // onInputChange(event){
    //     console.log(event.target.value)
        
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term)
        this.props.onSearchSubmit(this.state.term)
    }
    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label>Image Search</label>
                        {/* UNCONTROLLED ELEMENT */}
                        {/* <input type='text' onChange={this.onInputChange}/> */}

                        {/* CONTROLLED ELEMENT (we prefer this) */}
                        <input type='text' value={this.state.term} onChange={(e)=>this.setState({ term: e.target.value})}/> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar


// ===================Contolled vs Uncontrolled ===========================
/* 
In a controlled component, form data is handled by a React component. 
The alternative is uncontrolled components, where form data is handled by the DOM itself.

    Uncontrolled Components
Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. 
Instead of writing an event handler for all of your state updates, you use a ref to retrieve values from the DOM.
*/


// ============Understanding "this" in JS ======================================
/*
Ques: what is the value of "this" inside class?
ans: "this" is the reference back to the class itself. We can use it to get direct access to the properties of the class
        ex: this.state = SearchBar.state


Ques: How the value of "this" is determined in a function.
Ans: to get the value of "this" inside the method we dont look at the method rather we look at where the method has been called.
 */
