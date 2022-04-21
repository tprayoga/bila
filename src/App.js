import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Navbarsec from "./components/navbarsec";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Navbarsec />
      <Home />
    </div>
  );
}

export default App;
