import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/home/home";
import LiveTrack from "./Pages/LiveTrack/LiveTrack";
import LandingPage from "./Pages/LandingPage/LandingPage";

const App = () => {
  return (
    <BrowserRouter className="Site">
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route exact path="/LiveTrack" element={<LiveTrack />} />
        </Routes>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
