import "./Style/Reset.css";
import "./Style/Style.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";

import { WorkProvider } from "./WorkContext";
// import { Provider, ErrorBoundary } from "@rollbar/react";

// const rollbarConfig = {
//   accessToken: "17e0ee430c3e407bb547fe1754dbd531",
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// };

// const ErrorDisplay = ({ error, resetError }) => (
//   <div>…</div>
// );


function App() {
  return (
        <WorkProvider>
          <div className="App">
            <Header />
            {routes}
            <Footer />
          </div>
        </WorkProvider>
  );
}

export default App;
