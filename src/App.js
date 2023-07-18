import logo from "./components/logo.png";
import HomePage from './components/Home';
import Projects from './components/Projects';
import Particle from './components/Particle';
import { Navbar, NavbarBrand } from "react-bootstrap";
import TechnicalSkills from './components/TechnicalSkills';
import './style.css'

function App() {
  return (
    <div>
      <Particle />
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <NavbarBrand className="navbar-brand">
          <img src={logo} className="logo" alt="logo" />
        </NavbarBrand>
      </Navbar>
      <div className='main'>
        <HomePage />
        <TechnicalSkills />
        <Projects />
      </div>
    </div>
  )
}

export default App;