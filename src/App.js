import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Particle from './components/Particle';
import './style.css'

function App() {
  return (
    <div>
      <Router>
        <Particle />
        <Navbar />
        <div className='main'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
        </div>
      </Router>
    </div>
  );
}

export default App;