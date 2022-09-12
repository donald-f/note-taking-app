import React from "react";

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <button type="button" class="button block tertiary header-text">
        Create Note
      </button>
      <ul>
        <li class="active">
          <h3 class="header-text no-margin">My Special Note</h3>
          <p class="body-text no-margin muted">Last Updated: 1:37PM 7/26/19</p>
        </li>
        <li>
          <h3 class="header-text no-margin">My Special Note</h3>
          <p class="body-text no-margin muted">Last Updated: 1:37PM 7/26/19</p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
