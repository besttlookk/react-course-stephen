import React from 'react'

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.msg}</div>
            
        </div>
    )
}

// when we create a re-useable component it is best to give default values to the props..in case that prop is not mention during the creaton of the component instance
Spinner.defaultProps = {
    msg: "Loading..."
}

export default Spinner
