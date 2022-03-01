import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <Router className="Site">
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
