import React, { Component } from 'react'

class ImageCard extends Component {

    constructor(props){
        super(props)

        this.state = {spans: 0}

        // we are creating a ref and assigning it ti some instance varibale. so that we can refer back to it later on inside of our class 
        this.imageRef = React.createRef()
    }

    componentDidMount(){
        // console.log(this.imageRef)
        // console.log(this.imageRef.current)  /* it will give the access of DOM element created */
        // console.log(this.imageRef.current.clientHeight) /*its value will always come as Zero. Bcz we are trying to access height even before page is loaded */

        // to get around this we will add an event lister when the <img> elemnet is loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10)

        this.setState({spans})
    }

    render() {

        const { urls, description} = this.props.image
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                {/* this <img /> tag is not the DOM eement it is JSX.. it is coverted into DOM element.
                    With ref only we can have some connection with that element  */}
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard


// ===============React refs ==============================
/*
    lets suppose we want to get the height of the each image .
    using VANILA JAVASCRIPT:
        document.querySelector('img').clientHeight

    but with react we dont use " querySelector"  rather we use "React ref"


react Ref gives access to the single DOM element

we create ref in the constructor, assign them to instance variables, then pass to a particular JSX element as props.

*/