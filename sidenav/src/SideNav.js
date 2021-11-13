import React from 'react'

const SideNav = (props) => {
    
    
    return (
        <div className="sidenav" style={{width: props.width}} >
            <button onClick={props.closeSideNav}>X</button><br/>
            <a href="#section" >About</a><br/>
            <a href="#section" >Contact Us</a><br/>
            <a href="#section" >FAQ</a><br/>
            <a href="#section" >Home</a><br/>
        </div>
    )
}

export default SideNav