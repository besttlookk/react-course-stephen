import React, { useState} from 'react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    // on clicking on title we are updating the index value of active title.
    const onTitleClick = (index) =>{
        setActiveIndex(index)
    }

    const renderedItem = items.map((item, index) => {

        // we are updating the classname accroding to the index value.
        // ager current index ki value active index ke barabar ho to uska class active ker dena hai.
        const active = index ===activeIndex ? 'active' : ''
        return (
                <React.Fragment key='item.title'>
                    <div className = {`title ${active}`} onClick={() => onTitleClick(index)}>
                        <i className='dropdown icon'></i>
                        {item.title}
                    </div>

                    <div className= {`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
        )
    })


    return (
        <div className='ui styled accordion'>
            {renderedItem}
        </div>
    )
}

export default Accordion
