import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../UI/Button";
import "./Note.css";

const Note = (props) => {
  const [blah, setBlah] = useLocalStorage("blah", "");

  const [creatingNote, setCreatingNote] = useState(false);

  useEffect(() => {
    if (!props.paragraphs) {
      setCreatingNote(true);
    }
  }, [props.paragraphs]);

  // need to NOT have key={i}
  const noteParagraphs = props.paragraphs.map((para, i) => {
    return (
      <p className="body-text" key={i}>
        {para}
      </p>
    );
  });

  if (!creatingNote)
    return (
      <article>
        <h1 className="header-text">My Special Note</h1>
        {noteParagraphs}
        <input
          type="text"
          value={blah}
          onChange={(e) => setBlah(e.target.value)}
        ></input>
      </article>
    );
  return (
    <form>
      <label htmlFor="note-title">Note Title</label>
      <input
        id="note-title"
        className="title-input"
        type="text"
        value={blah}
        onChange={(e) => setBlah(e.target.value)}
      ></input>
      <label htmlFor="note-body">Note Body</label>
      <textarea id="note-body"></textarea>
      <Button onClick={() => {}}>Submit</Button>
    </form>
  );
};

export default Note;
