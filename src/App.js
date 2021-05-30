import "./Style/Reset.css";
import "./Style/Style.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
