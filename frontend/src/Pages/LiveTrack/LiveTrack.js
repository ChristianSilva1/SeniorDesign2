import FloorPlan from "./FloorplanTest.jpg";
import "./LiveTrack.css";
import Pin from "./BeaconPin";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function LiveTrack() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home1">
          Testing Testing
          <div className="homewdiget1">
            <img src={FloorPlan} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
