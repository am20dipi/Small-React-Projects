import SideNav from './SideNav';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [width, setWidth] = useState('0%')

  const openSideNav = (e) => {
    console.log(e)
    setWidth('25%')
  }

  const closeSideNav = () => {
    setWidth('0%')
}

  return (
    <div className="App">
      <div className="welcome">
        <h2>WELCOME</h2>
        <button onClick={openSideNav}>Open</button><br/>
      </div>
      <div className="sidebar">
        <SideNav width={width} closeSideNav={closeSideNav} /><br/>
      </div>
    </div>
  )
}

export default App;
