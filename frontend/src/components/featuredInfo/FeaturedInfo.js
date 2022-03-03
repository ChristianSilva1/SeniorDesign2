import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">New Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">21</span>
        </div>
        <span className="featuredSub">Added this month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Alerts</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2</span>
        </div>
        <span className="featuredSub">This week</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Number of Tags</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">52</span>
        </div>
        <span className="featuredSub">Total assigned</span>
      </div>
    </div>
  );
}
