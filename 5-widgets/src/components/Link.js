import React from 'react'

// whenever user click on this component we gonna emit "navigation event"
// that navigation event is then sent to all the "Route" components
const Link = ({className, href, children})=> {

    const onClick =(event) => {
        // when user click while holding ctrl..we need the browser to do normal things
        // metakey in mac/os
        if(event.metakey || event.ctrlKey){
            return;
        }
        event.preventDefault()   
        // we need to chnage the URL without page reload
        window.history.pushState({}, '', href)

        // now we gonna tell the "Link" component that URL has been chnaged
        // we are going to emit Navigation event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }
    return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link