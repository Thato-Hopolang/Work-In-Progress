import './App.css'
import Navigation from './Components/Navigation/Navigation.jsx'
import { Route, Routes } from 'react-router-dom'

/* Pages */

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  console.log(window.location)

  return (
    <div>
      <Navigation/>
      
      <div className="routing">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
