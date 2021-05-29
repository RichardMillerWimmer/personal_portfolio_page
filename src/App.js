import "./Style/Reset.css";
import "./Style/Style.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing/>
      <Footer />
    </div>
  );
}

export default App;
