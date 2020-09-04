import React from "react";
import { Dropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./DropdownCustom.css";

function DropdownCustom() {
  return (
    <div>
      <Dropdown className="dropdown">
        <Dropdown.Toggle
          className="dropdown__button"
          variant="success"
          id="dropdown-basic"
        >
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownCustom;
