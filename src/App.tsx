import { Header } from './components/Header';
import { About } from './components/About';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <About />
        <Work />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
