import NotesContext from "./notes-context";
import React, { useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
// import { useReducer } from "react";

const NotesProvider = (props) => {
  const [notes, setNotes] = useLocalStorage("notes", [
    {
      id: "n1",
      title: "My Special Note",
      body: `You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine.\nSo when its time to finally get your children that very first telescope, you want to make sure it’s just the right thing. There are a number of reasons you should put some serious thought into just what this beginner telescope should look like. Perhaps this will be your children’s first experience with a real telescope. They may have a healthy and thriving love of astronomy from your family trips to the country to watch a meteor shower or just to gaze at the stars. And you may have piqued their interest showing them how to enhance the experience with binoculars or even letting them play with your telescope.`,
      active: true,
      lastUpdated: "1:37PM 7/26/19",
    },
    {
      id: "n2",
      title: "My Other Note",
      body: `I haven't told anyone about this note yet. \n\n\nLet's keep it between us`,
      active: false,
      lastUpdated: "12:10PM 12/10/22",
    },
  ]);
  const addNote = useCallback(
    (note) => {
      setNotes((notes) => {
        return [note, ...notes];
      });
    },
    [setNotes]
  );
  const [activeNoteId, setActiveNoteId] = useLocalStorage(
    "activeNoteId",
    notes.find((note) => note.active === true)?.id || null
  );
  const [modifyingNote, setModifyingNote] = useLocalStorage(
    "modifyingNote",
    false
  );
  const removeNote = (id = activeNoteId) => {
    if (notes.length - 1 === 0) {
      setActiveNoteId(null);
    } else if (id === activeNoteId) {
      setActiveNote(notes.find((note) => note.id !== id).id);
    }
    setNotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
    setModifyingNote(false);
  };
  const editNote = (editedNote) => {
    setNotes((notes) => {
      // will want the most recently updated to be on the top
      return notes.map((note) => {
        if (note.id === editedNote.id) {
          const d = new Date();
          const dateFormatted = `${d.getHours() % 12 || 12}:${d.getMinutes()} ${
            d.getMonth() + 1
          }/${d.getDate().toString()}/${d.getFullYear().toString().slice(-2)}`;
          return {
            id: editedNote.id,
            title: editedNote.title,
            body: editedNote.body,
            active: true,
            lastUpdated: dateFormatted,
          };
        } else {
          return note;
        }
      });
    });
  };
  const setActiveNote = useCallback(
    (id) => {
      setActiveNoteId(id);
      setNotes((notes) => {
        return notes.map((note) => {
          return note.id === id
            ? { ...note, active: true }
            : { ...note, active: false };
        });
      });
    },
    [setActiveNoteId, setNotes]
  );
  const notesContext = {
    notes: notes,
    modifyingNote: modifyingNote,
    setModifyingNote: setModifyingNote,
    addNote: addNote,
    removeNote: removeNote,
    editNote: editNote,
    setActiveNote: setActiveNote,
    activeNoteId: activeNoteId,
  };

  return (
    <NotesContext.Provider value={notesContext}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
