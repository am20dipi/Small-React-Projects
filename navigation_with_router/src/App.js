import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"



// Route allows us to tell React to render specific component to a specific route
// BrowserRouter adds routing capabilities -- everything between the BrowserRoute tags will have the ability to perform routing
// Routes renders the first Route it encounters that matches the route.
// Redirect module will allow us to redirect the user to another route depending on the directory.

import Home from './Home'
import About from './About'
import Nav from './Nav'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>ADRI</h1>
      <Router>
        <Nav/>
        <Routes>
          {/* Routes only renders the first component that matches the URL -- it is more specific */}
          <Route path="/" element={<Home/>}></Route>
          {/* render Home if the URL contains '/' */}
          {/* render About if the URL contains '/about' */}
          <Route path="/about" element={<About/>}></Route>
          {/* exact prop now tells React Router to display the component only if the URL path is exact */}
        </Routes>
      </Router>
    </div>
  )
}

// The Routes component essentially stops the whole process
// of goig through all the route paths as soon as it matches the URL.
// It will only render the first route component that matches the current URL.
export default App
