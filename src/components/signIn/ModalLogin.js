import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
//import { Button } from "@material-ui/core";
import { Tabs, Tab } from "react-bootstrap";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function ModalLogin(props) {
  const [key, setKey] = useState("SignIn");
  return (
    <Modal {...props} closeButton>
      <div style={{ padding: "10px", marginTop: "10px" }}>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="SignIn" title="Sign In">
            <Tab.Pane>
              <SignIn />
            </Tab.Pane>
          </Tab>

          <Tab eventKey="profile" title="Profile">
            <Tab.Pane>
              <SignUp />
            </Tab.Pane>
          </Tab>
        </Tabs>
      </div>
    </Modal>
  );
}

export default ModalLogin;
