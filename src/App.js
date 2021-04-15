import './styles/style.css';
import HomePage from './pages/HomePage';
import Particles from 'react-particles-js';
import Snake from 'react-simple-snake';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <>
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
    </Router>
    {/* <Snake /> */}
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
      />
      <Footer />
    </>
  );
}

export default App;
