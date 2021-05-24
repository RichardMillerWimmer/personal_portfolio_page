import "./Style/Reset.css";
import "./Style/Style.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import About from './Components/About/About';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Work />
      <div className='clickthrough'>
        <Contact />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
