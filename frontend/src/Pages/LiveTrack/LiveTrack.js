import FloorPlan from "./FloorplanTest.jpg";
import "./LiveTrack.css";
import Pin from "./BeaconPin";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function NewUser() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="TestImage">
          <img src={FloorPlan} alt=""></img>
        </div>
      </div>
    </div>
  );
}
