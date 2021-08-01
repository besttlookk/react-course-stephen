import React, {useState, useEffect, useRef} from 'react'


// reusable dropdown
const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(()=>{

        const onBodyClick = (event)=>{
            // console.log(event.target)

            // "contains" will see whether the element that is clicked on is inside of the component
            // ager dropdown per click kare to kuch na ho
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick, {capture: true})

        // clean up
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    },[])

    const renderOptions = options.map(option => {

        // we are not rendering the option which is presently selected
        if(option.value === selected.value){
            return null
        }
        return (
            <div 
                key={option.value} 
                className='item'
                onClick = {() => onSelectedChange(option)}    
            >
                {option.label}
            </div>
        )
    })

    // console.log(ref.current)
    return (
        <div className='ui form' ref={ref}>
            <div className="field">
                <div className="label">
                    {label}
                </div>
                <div onClick = {()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Dropdown


// ==============to close dropdown on click outside the dropdown
/*
The dropdown needs to detect a click event on any element besides one it created

The dropdown has a hard time setting up event handlers on elements that it does not create

Event bubbling is a thing.


// ----solution
/*
The dropdown can set up a manual event listener(without React) on the body elelmet.
A click on any element will be bubble up to the body




// ====================order of event 
first js event handlers[addEventHandler] and then react event handler

//--Scenario #1 : User clicks on an element that is created by the Dropdown component
    If a user  clicks on one of these elements, then we propably dont want the body eventlistener to do anything

// --Scenarios #2: User clicks on any element besides the one created by the Dropdown
    If a user clicks on any of these elements, we do want the body event listener to close he dropdown
*/