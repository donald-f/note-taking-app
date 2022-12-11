import React, { useContext } from "react";
import NotesContext from "../../store/notes-context";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  const notesCtx = useContext(NotesContext);
  const removeNoteHandler = () => {
    notesCtx.removeNote();
  };
  const dateUpdated = notesCtx.notes.find(
    (note) => note.id === notesCtx.activeNoteId
  )?.lastUpdated
    ? notesCtx.notes.find((note) => note.id === notesCtx.activeNoteId)
        .lastUpdated
    : "";
  return (
    <header>
      <p className="body-text no-margin muted">Last Updated: {dateUpdated}</p>
      <div className={classes["button-group"]}>
        <Button
          className="primary header-text"
          onClick={() => {
            notesCtx.setModifyingNote((modifyingNote) => !modifyingNote);
          }}
        >
          Edit Note
        </Button>
        <Button onClick={removeNoteHandler} className="secondary header-text">
          Delete Note
        </Button>
      </div>
    </header>
  );
};

export default Header;
