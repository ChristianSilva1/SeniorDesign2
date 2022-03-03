import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Christian Silva</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dylan Sauerbrun</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Aundre’ Fredericks</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Isaiah Williams</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tony Stark</span>
            <span className="widgetSmUserTitle">Employee</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
