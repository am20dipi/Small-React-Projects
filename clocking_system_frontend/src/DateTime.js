import React, {useState, useEffect} from 'react'

export const DateTime = () => {
    var [date, setDate] = useState(new Date())
    // when new Date() is used the initial state of "date" is set to the current date.
    // it will stay constant as to when the component was first rendered

    useEffect(() => {
        var timer = setInterval(() => {
            setDate(new Date())
            // setting the state of new Date()
            // this function will be called every 1 second
            // our date state is set at an interval, every 1 second
        }, 1000)

        return function cleanup(){
            clearInterval(timer)
        }
    })

    return (
        <div className="current">
            <p> Time: {date.toLocaleTimeString()}</p>
            <p> Date: {date.toLocaleDateString()}</p>
        </div>
    )


}
export default DateTime