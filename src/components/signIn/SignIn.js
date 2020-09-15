import React from "react";
import { Modal } from "react-bootstrap";

function SignIn() {
  return (
    <div>
      <Modal.Body>
        <div>
          <label for="si-number"> Phone number</label>
          <input
            type="tel"
            className="form-control"
            id="si-number"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="form-group">
          <label for="si-password"> password</label>
          <div className="password-toggle">
            <input
              type="password"
              className="form-control"
              id="si-password"
              placeholder="password"
              required
            />
          </div>
          <label className="password-toggle-btn">
            <input className="custom-control-input" type="checkbox" />
            <i className="czi-eye password-toggle-indicator"></i>
            <span className="sr-only">Show password</span>
          </label>

          <div className="invalid-feedback">Please provide a valid email.</div>
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
          <a href="forgotpassword" className="font-size-sm">
            forgot password
          </a>
          <button className="btn bt-primary btn-block btn-shadow" type="submit">
            Sign In
          </button>
        </div>
      </Modal.Body>
    </div>
  );
}

export default SignIn;
