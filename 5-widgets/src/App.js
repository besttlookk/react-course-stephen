import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Shade of Blue",
        value: "blue"
    },
]

const App = () => {

    const [selected, setSelected] = useState(options[0])
    // const [showDropdown, setShowDropdown] = useState(true)
    const items = [
        {
            title: "What is react?",
            content: "React is a front end js framework"
        },
        {
            title: "Why use React?",
            content:"React is a favorite js libarary"
        },
        {
            title: "How do you use react?",
            content:"you use react  by creating components"
        }
    ]

    // const showAccordion = () => {
    //     if(window.location.pathname === '/'){
    //         return <Accordion items ={items} />

    //     }
    // }
    // const showList = () => {
    //     if(window.location.pathname === '/list'){
    //         return <Search />

    //     }
    // }
    // const showDropdown = () => {
    //     if(window.location.pathname === '/dropdown'){
    //         return <Dropdown />

    //     }
    // }
    // const showTranslate = () => {
    //     if(window.location.pathname === '/translate'){
    //         return <Translate />

    //     }
    // }

    
    return (
        <div>
            <Header />
            {/* <Accordion items ={items} /> */}
            {/* <Search /> */}
            {/* <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null
            
            } */}

            {/* <Translate /> */}


            {/* ==============first routing approch */}
            {/* {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()} */}

            {/* second approch using Reusable Route component */}
            <Route path='/'>
                <Accordion items ={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label= "select a color" />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}

export default App
