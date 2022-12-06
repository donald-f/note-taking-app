import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const Note = (props) => {
  const [blah, setBlah] = useLocalStorage("blah");

  // need to NOT have key={i}
  const noteParagraphs = props.paragraphs.map((para, i) => {
    return (
      <p className="body-text" key={i}>
        {para}
      </p>
    );
  });

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
};

export default Note;
