import React from "react";
import { Dropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./DropdownCustom.css";

function DropdownCustom(props) {
  const items_Men = ["Jeans", "Top"];
  const listItems_men = items_Men.map((item) => (
    <Dropdown.Item>{item}</Dropdown.Item>
  ));

  return (
    <div>
      <Dropdown className="dropdown">
        <Dropdown.Toggle
          className="dropdown__button"
          variant="success"
          id="dropdown-basic"
        >
          {props.title}
        </Dropdown.Toggle>
        <Dropdown.Menu>{listItems_men}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownCustom;
