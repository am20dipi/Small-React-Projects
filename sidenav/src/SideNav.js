import React from 'react'

const SideNav = (props) => {
    
    
    return (
        <div className="sidenav">
            <button onClick={props.closeSideNav}>X</button><br/>
            <a href="#section" style={{width: props.width}}>About</a><br/>
            <a href="#section" style={{width: props.width}}>Contact Us</a><br/>
            <a href="#section" style={{width: props.width}}>FAQ</a><br/>
            <a href="#section" style={{width: props.width}}>Home</a><br/>
        </div>
    )
}

export default SideNav