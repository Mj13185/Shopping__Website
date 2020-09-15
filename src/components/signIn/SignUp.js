import React from "react";

function SignUp() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="su-name">Full name</label>
          <input
            type="text"
            className="form-control"
            id="su-name"
            placeholder="Full name"
            required
          />
          <label for="su-num">Phone number</label>
          <input
            type="tel"
            className="form-control"
            id="su-num"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="form-group">
          <label for="su-password">password</label>
          <div className="password-toggle">
            <input
              type="password"
              className="form-control"
              id="su-password"
              placeholder="password"
              required
            />
          </div>
          <label className="password-toggle-btn">
            <input className="custom-control-input" type="checkbox" />
            <i className="czi-eye password-toggle-indicator"></i>
            <span className="sr-only">Show password</span>
          </label>
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between">
          <div className="custom-control custom-checkbox mb-2">
            <input
              type="checkbox"
              className="custom-control-input"
              id="si-remember"
            />
            <label for="si-remember" className="custom-control-label">
              Remember me
            </label>
          </div>
          <button className="btn bt-primary btn-block btn-shadow" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
