import React from 'react'
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            {/* problem with multiple anchor tag is whole page reload after each change in url */}
            {/* <a href="/" className="item">Accordion</a>
            <a href="/list" className="item">Search</a>
            <a href="/dropdown" className="item">Dropdown</a>
            <a href="/translate" className="item">Translate</a> */}

            <Link href="/" className="item">Accordion</Link>
            <Link href="/list" className="item">Search</Link>
            <Link href="/dropdown" className="item">Dropdown</Link>
            <Link href="/translate" className="item">Translate</Link>
        </div>
    )
}

export default Header