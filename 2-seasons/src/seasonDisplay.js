import React from 'react'
import './seasonDisplay.css'
const seasonConfig = {
    summer : {
        text: "Lets hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, its chilly",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    }else{
        return lat > 0 ? "winter" : "summer" 
    }
}

const seasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    // const text = season === 'winter' ? "Burr, it is chilly" : "Lets hit the beach"
    // const iconName = season === "winter" ? "snowflake" : "sun"
    const {text, iconName } = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon ${iconName} massive icon-left`}/>
            <h1 className='text'>
            {text}
            </h1>
            <i className={`icon ${iconName} massive icon-right`}/>

        </div>
    )
}

export default seasonDisplay
