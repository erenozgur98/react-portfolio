import './styles/style.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact page={HomePage} />
      <Route path="/about" exact page={About} />
      <Route path="/projects" exact page={Projects} />
    </Router>
  );
}

export default App;
