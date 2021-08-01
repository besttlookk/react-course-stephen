import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './seasonDisplay'
import Spinner from './Spinner'


// const App = () => {

//     // "window.navigator.geolocation.getCurrentPosition" sometimes take time to get user location so we passes two callback function as its argument
//     window.navigator.geolocation.getCurrentPosition(
//         (location) => console.log(location), // success callback
//         (err) => console.log(err) // error callback
//     )
//     return (
//         <div>
//             Hi! there
//         </div>
//     )
// }

class App extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state = { lat: null, errorMessage: ''}
    // }

    state = {
            lat: null,
            errorMessage: ''
    }

    renderContent() {
        // ager error aaya to
        if(!this.state.lat && this.state.errorMessage){
            return <div>Error : {this.state.errorMessage}</div>;
        }

        // ager response aaya to
        if(!this.state.errorMessage && this.state.lat){
            // return <div>Latitude : {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat} />

        }

        // dono me se kuch nahi aaya to...spinner nachate rehna hai  :p
        return <Spinner msg="Please accept location request"/>;
    }

    // we should try to have only one return statement in the render method. in case of conditional statementr we shold make 
    // helper function.
    render(){
        // ====converted it into helper function to have only one return statemet ============
        // if(!this.state.lat && this.state.errorMessage){
        //     return <div>Error : {this.state.errorMessage}</div>;
        // }

        // if(!this.state.errorMessage && this.state.lat){
        //     // return <div>Latitude : {this.state.lat}</div>;
        //     return <SeasonDisplay lat={this.state.lat} />

        // }

        // return <Spinner msg="Please accept location request"/>;

        return <div className="border red">{this.renderContent()}</div>
    }

    componentDidMount(){
        // ---async work
        window.navigator.geolocation.getCurrentPosition(
            (location) => this.setState({lat: location.coords.latitude}), 
            (err) => this.setState({errorMessage: err.message})
            
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

export default App
