import React from "react";

const LoginForm = props => {
  const { inputBoxStyle, buttonStyle } = styles;
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Login clicked");
  };
  return (
    <form
      id="login-form"
      onSubmit={e => handleSubmit(e)}
      method="post"
      role="form"
      style={{ display: "block" }}
    >
      <div className="form-group" style={inputBoxStyle}>
        <input
          type="text"
          name="username"
          id="username"
          tabIndex="1"
          className="form-control"
          placeholder="Username"
          value=""
        />
      </div>
      <div className="form-group" style={inputBoxStyle}>
        <input
          type="password"
          name="password"
          id="password"
          tabIndex="2"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3" style={buttonStyle}>
            <input
              type="submit"
              name="login-submit"
              id="login-submit"
              tabIndex="4"
              className="form-control btn btn-login"
              value="Log In"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <a
                href="https://phpoll.com/recover"
                tabIndex="5"
                className="forgot-password"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
const styles = {
  inputBoxStyle: {
    padding: 10
  },
  buttonStyle: {
    left: "24%"
  }
};
export default LoginForm;
