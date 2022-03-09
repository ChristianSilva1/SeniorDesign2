import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="home">
        <div className="intro-text">
          <div>
            <h1 className="title">Welcome to Pegasus Protection Services</h1>
            <p className="subtitle">
              Indoor Tracking - Live Camera Feed - Admin Portal
            </p>
          </div>
          <div className="buttonContainer">
            <a href="/login">
              <button size="lg" className="landingbutton">
                Login
              </button>
            </a>
            <a href="/register">
              <button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
