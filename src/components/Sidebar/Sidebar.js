import React, { useContext } from "react";
import NotesContext from "../../store/notes-context";
import Button from "../UI/Button";
import NoteSelection from "./NoteSelection";

const Sidebar = () => {
  const notesCtx = useContext(NotesContext);
  const activateNoteHandler = (id) => {
    notesCtx.setModifyingNote(false);
    notesCtx.setActiveNote(id);
  };
  const createNoteHandler = () => {
    const newId = notesCtx.notes.reduce((updateId, note) => {
      return `n${Math.max(+updateId.slice(1), +note.id.slice(1)) + 1}`;
    }, "n1");
    // const newId = notesCtx.notes.length;
    notesCtx.addNote({
      active: true,
      body: "",
      title: "",
      id: newId,
      lastUpdated: "",
    });
    notesCtx.setActiveNote(newId);
  };
  const noteSelections = notesCtx.notes.map((note) => {
    return (
      <NoteSelection
        id={note.id}
        key={note.id}
        title={note.title === "" ? "Untitled" : note.title}
        active={note.active}
        lastUpdated={note.lastUpdated}
        onClick={activateNoteHandler.bind(null, note.id)}
      />
    );
  });
  return (
    <aside className="sidebar">
      <Button
        className="block tertiary header-text"
        onClick={createNoteHandler}
      >
        Create Note
      </Button>
      <ul>{noteSelections}</ul>
    </aside>
  );
};

export default Sidebar;
