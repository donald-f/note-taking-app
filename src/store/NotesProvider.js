import NotesContext from "./notes-context";
import React from "react";
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
  const addNote = (note) => {
    setNotes((notes) => {
      return [...notes, note];
    });
  };
  const removeNote = (id) => {
    setNotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
  };
  const editNote = (id, newTitle, newBody) => {
    setNotes((notes) => {
      return notes.map((note) => {
        if (note.id === id) {
          return { id: id, title: newTitle, body: newBody };
        } else {
          return note;
        }
      });
    });
  };
  const notesContext = {
    notes: notes,
    addNote: addNote,
    deleteNote: removeNote,
    editNote: editNote,
  };

  return (
    <NotesContext.Provider value={notesContext}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;

/* converted from Max's method

const notesReducer = (state, action) => {
   switch (action.type) {
      case 'ADD': {
         console.log('add');
         return 'add'
      }
      case 'REMOVE': {
         console.log('remove');
         return 'remove'
      }
      default:
         return state;
   }
}

const NotesProvider = () => {
   const defaultNotesState = [];
   const [notesState, dispatchNotesAction] = useReducer(notesReducer, defaultNotesState)
   const addNoteToCollection = note =>{
      dispatchNotesAction({type: 'ADD', note: note})
   }
   const removeNoteFromCollection = id => {
      dispatchNotesAction({type: 'REMOVE', id: id})
   }
   const notesContext = {
      notes: notesState.notes,
      addNote: addNoteToCollection,
      deleteNote: removeNoteFromCollection
   }
  return (
    <div>NotesProvider</div>
  )
}

export default NotesProvider

*/
