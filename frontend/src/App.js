import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/home/home";
import LiveTrack from "./Pages/LiveTrack/LiveTrack";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <Router className="Site">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/LiveTrack" element={<LiveTrack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
