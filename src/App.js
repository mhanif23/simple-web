import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Robots from "./pages/Robots";

function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/robots" element= {<Robots />}/>
        <Route path="*" element= {<ErrorPage />}/>
      </Routes>
    </Router>
  )
}

export default App;


