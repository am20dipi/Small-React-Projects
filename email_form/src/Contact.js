import React from 'react'
//import { useForm } from 'react-hook-form'

export const Contact = () => {
   // const { register, handleSubmit, errors } = useForm()
    
    
    const handleSubmit = (data) => {
        console.log(data)
    }
    
    return (
        <div className="contact">
            <h2>CONTACT</h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <input
                type='text'
                name='username'
                placeholder='name' 
                maxLength='30'
                />
                <br/><br/>
                <input type='email' name='email' maxLength='30' placeholder='email'/>
                <br/><br/>
                <textarea name='message' maxLength='1000' placeholder='write your message here...'/>
                <br/><br/>
                <input id='submit' type='submit' value='submit' />
            </form>
        </div>
    )
}

export default Contact