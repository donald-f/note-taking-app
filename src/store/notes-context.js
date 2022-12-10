import React from "react";

const NotesContext = React.createContext({
  notes: [],
  addNote: (note) => {},
  deleteNote: (id) => {},
  editNote: (id, newTitle, newBody) => {},
});

export default NotesContext;
