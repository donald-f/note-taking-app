import React from "react";

const Note = (props) => {
  const noteParagraphs = props.paragraphs.map((para) => {
    return <p className="body-text">{para}</p>;
  });
  return (
    <article>
      <h1 className="header-text">My Special Note</h1>
      {noteParagraphs}
    </article>
  );
};

export default Note;
