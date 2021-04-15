import './styles/style.css';
import HomePage from './components/Home/Home';
// import Snake from 'react-simple-snake';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
