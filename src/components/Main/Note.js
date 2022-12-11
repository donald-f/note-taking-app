import React, { useEffect, useContext } from "react";
import NotesContext from "../../store/notes-context";
// import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../UI/Button";
import "./Note.css";

const Note = () => {
  const notesCtx = useContext(NotesContext);
  const activeNote = notesCtx.notes.find(
    (note) => note.id === notesCtx.activeNoteId
  );

  useEffect(() => {
    console.log(notesCtx.notes.length);
  }, [notesCtx.notes.length]);

  useEffect(() => {
    if (notesCtx.notes.length === 0) {
      console.log("here");
      notesCtx.setModifyingNote(true);
      notesCtx.addNote({
        active: true,
        body: "",
        title: "",
        id: "n1",
        lastUpdated: "",
      });
      notesCtx.setActiveNote("n1");
    }
  }, [notesCtx.notes.length, notesCtx.activeNoteId, notesCtx]);

  console.log(notesCtx.notes.length, notesCtx.modifyingNote);

  const title = activeNote?.title ? activeNote.title : "";
  const body = activeNote?.body ? activeNote.body : "";

  if (title === "" && body === "") {
    notesCtx.setModifyingNote(true);
  }
  const noteParagraphs = notesCtx.activeNoteId ? (
    activeNote.body
      .split("\n")
      .filter((para) => para !== "")
      .map((para, i) => {
        return (
          <p className="body-text" key={i}>
            {para}
          </p>
        );
      })
  ) : (
    <p></p>
  );

  const updateTitleHandler = (e) => {
    notesCtx.editNote({ ...activeNote, title: e.target.value });
  };
  const updateBodyHandler = (e) => {
    notesCtx.editNote({ ...activeNote, body: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    notesCtx.setModifyingNote(false);
  };

  if (!notesCtx.modifyingNote)
    return (
      <article>
        <h1 className="header-text">{title}</h1>
        {noteParagraphs}
      </article>
    );
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="note-title">Title</label>
      <input
        id="note-title"
        className="title-input"
        type="text"
        value={title}
        onChange={updateTitleHandler}
      ></input>
      <label htmlFor="note-body">Note Body</label>
      <textarea
        id="note-body"
        value={body}
        onChange={updateBodyHandler}
      ></textarea>
      <Button type="submit" className="submit">
        Submit
      </Button>
    </form>
  );
};

export default Note;
