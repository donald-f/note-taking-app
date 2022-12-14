import React from "react";
import "./NoteSelect.css";

const NoteSelect = (props) => {
  return (
    <li
      onClick={props.onClick}
      id={props.id}
      key={props.id}
      className={`note-selector ${props.active ? "active" : ""}`}
    >
      <h3 className="header-text no-margin">{props.title}</h3>
      <p className="body-text no-margin muted">
        Last Updated: {props.lastUpdated}
      </p>
    </li>
  );
};

export default NoteSelect;
