import "./Login.css";

import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LOGO from "./PPSLOGO.png";

const LoginScreen = ({ history }) => {
  return (
    <div className="div-login">
      <div className="div-login-logo">
        <img src={LOGO} alt="logo" className="logo-img"></img>
      </div>
      <div className="div-login-form">
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            className="login-form-group"
            style={{
              margin: "10px 0px",
            }}
          >
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="login-form-group"
          >
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Button
            style={{
              margin: "10px 0px",
            }}
            className="loginButton"
            size="lg"
            variant="primary"
          >
            Login
          </Button>
        </Form>
      </div>
      <div>
        <div className="new-user-div">New User?</div>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
