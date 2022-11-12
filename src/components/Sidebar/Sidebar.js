import React from "react";
import Button from "../UI/Button";
import NoteSelection from "./NoteSelection";

const Sidebar = () => {
  const dummyNotes = [
    {
      title: "My Special Note",
      lastUpdated: "1:37PM 7/26/19",
      active: true,
      id: Math.random(),
    },
    {
      title: "My Special Note2",
      lastUpdated: "1:39PM 7/26/19",
      active: false,
      id: Math.random(),
    },
  ];
  const noteSelections = dummyNotes.map((note) => {
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
