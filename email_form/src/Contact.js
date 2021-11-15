import React from 'react'

export const Contact = () => {
    return (
        <div className="contact">
            <h2>CONTACT</h2>
            <form id='contact-form'>
                <input type='text' name='username' placeholder='Username'/>
                <br/>
                <input type='email' name='email' placeholder='Email'/>
                <br/>
                <textarea name='message' placeholder='Write your message here...'/>
                <br/>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}