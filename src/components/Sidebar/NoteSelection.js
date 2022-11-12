import React from "react";

const NoteSelect = (props) => {
  return (
    <li key={props.id} className={props.active ? "active" : undefined}>
      <h3 className="header-text no-margin">{props.title}</h3>
      <p className="body-text no-margin muted">
        Last Updated: {props.lastUpdated}
      </p>
    </li>
  );
};

export default NoteSelect;
