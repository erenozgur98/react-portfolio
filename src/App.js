import './styles/style.css';
import HomePage from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Games from './components/Games';
import Particle from './components/Particle';

function App() {
  return (
    <>
      <Router>
        <Particle />
        <Navbar />
        <div className="main">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/games" component={Games} />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
