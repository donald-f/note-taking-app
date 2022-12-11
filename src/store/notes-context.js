import React from "react";

const NotesContext = React.createContext({
  notes: [],
  activeNoteId: "",
  modifyingNote: false,
  setModifyingNote: () => {},
  addNote: (note) => {},
  removeNote: (id) => {},
  editNote: (id, newTitle, newBody) => {},
  setActiveNote: (id) => {},
});

export default NotesContext;
