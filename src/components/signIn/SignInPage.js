import React from "react";
import Modal from "react-bootstrap/Modal";
//import { Button } from "@material-ui/core";
//import { Tabs, Tab } from "react-bootstrap";

function SignInPage(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-content">
        <div className="modal-header">
          <ul className="nav nav-tabs card-header-tabs" role="tablist">
            <li className="nav-item">
              <a href="#signin-tab" className="nav-link active">
                sign in
              </a>
            </li>
            <li className="nav-item">
              <a href="#signup-tab" className="nav-link">
                sign up
              </a>
            </li>
          </ul>
          <button className="close" type="button" data-dismiss="modal">
            <span onClick={props.onHide}>x</span>
          </button>
        </div>

        <div className="modal-body tab-content py-4">
          <form
            className="needs-validation tab-pane fade active show"
            id="signin-tab"
          >
            <div className="form-group">
              <label for="si-email"> Email Address</label>
              <input
                type="email"
                className="form-control"
                id="si-email"
                placeholder="johndoe@example.com"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
            <div className="form-group">
              <label for="si-password"> password</label>
              <div className="password-toggle">
                <input
                  type="password"
                  className="form-control"
                  id="si-password"
                  placeholder="j"
                  required
                />
              </div>
              <label className="password-toggle-btn">
                <input className="custom-control-input" type="checkbox" />
                <i className="czi-eye password-toggle-indicator"></i>
                <span className="sr-only">Show password</span>
              </label>

              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default SignInPage;
