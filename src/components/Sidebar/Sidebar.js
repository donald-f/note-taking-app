import React, { useContext } from "react";
import NotesContext from "../../store/notes-context";
import Button from "../UI/Button";
import NoteSelection from "./NoteSelection";

const Sidebar = () => {
  const notesCtx = useContext(NotesContext);
  const dummyNotes = [
    {
      // title: "My Special Note",
      title: notesCtx.notes[0].title,
      lastUpdated: "1:37PM 7/26/19",
      active: true,
      id: Math.random(),
    },
    {
      title: notesCtx.notes[1].title,
      lastUpdated: "1:39PM 7/26/19",
      active: false,
      id: Math.random(),
    },
  ];
  console.log(
    notesCtx.notes[0].lastUpdated,
    typeof notesCtx.notes[0].lastUpdated
  );
  const noteSelections = notesCtx.notes.map((note) => {
    return (
      <NoteSelection
        key={note.id}
        title={note.title}
        active={note.active}
        lastUpdated={note.lastUpdated}
      />
    );
  });
  return (
    <aside className="sidebar">
      <Button className="block tertiary header-text">Create Note</Button>
      <ul>{noteSelections}</ul>
    </aside>
  );
};

export default Sidebar;
