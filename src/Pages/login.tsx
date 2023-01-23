import "../Styles/login.scss";
import lendsqrLogo from "../Images/Lendsqr-logo.png";
import LoginImage from "../Images/login-picture.png";

function Login() {
  return (
    <div className="page-container">
      <div>
        <img src={lendsqrLogo} alt="logo" id="lendsqr-login" />
      </div>
      <div className="inner-container">
        <div className="first-section">
          <div className="welcome-section">
            <div>
              <img src={LoginImage} alt="loginimage" id="welcome-image" />
            </div>
          </div>
        </div>
        <div className="form-container">
          <div>
            <div>
              <h2 className="form-message">Welcome!</h2>
              <p>Enter details to login</p>
            </div>

            <div className="input-fields">
              <div>
                <input type="email" placeholder="Email" />
              </div>

              <div>
                <input type="password" placeholder="Password" />
              </div>

              <p className="forgot">FORGOT PASSWORD?</p>
              <button className="login">LOG IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
