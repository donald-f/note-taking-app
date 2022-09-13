import React from "react";
import Button from "../UI/Button";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Button className="block tertiary header-text">Create Note</Button>
      <ul>
        <li className="active">
          <h3 className="header-text no-margin">My Special Note</h3>
          <p className="body-text no-margin muted">
            Last Updated: 1:37PM 7/26/19
          </p>
        </li>
        <li>
          <h3 className="header-text no-margin">My Special Note</h3>
          <p className="body-text no-margin muted">
            Last Updated: 1:37PM 7/26/19
          </p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
