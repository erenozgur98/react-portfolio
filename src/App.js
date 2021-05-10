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
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;