import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home  from '../src/pages/home';
import About  from '../src/pages/about';
import Robots  from '../src/pages/robots';

function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/robots" element= {<Robots />}/>
      </Routes>
    </Router>
  )
}

export default App;


