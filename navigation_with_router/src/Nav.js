import { Link } from 'react-router-dom'
// With React-router, we can assume the Link component to be an "a" tag
// We wrapped our Link components between ul
// Using a "to" property we tell the Link component what URL path this link provides

function Nav(){
    return (
        <section className="nav">
            <ul>
                <Link to="/">Home</Link><br/>
                <Link to="/about">About</Link>
            </ul>
        </section>
    )
}

export default Nav