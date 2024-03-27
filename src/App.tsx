import "./i18n/i18n";
import "./App.css";
import Routing from "./router/router";
import AppContextProvider from "./context/app";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppContextProvider>
          <Routing />
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
