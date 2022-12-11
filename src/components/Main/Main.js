import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";

// disallow backticks from notetaking

const Main = () => {
  const [modifyingNote, setModifyingNote] = useState(false);
  const dummyParas = [
    `You might remember the Dell computer commercials in which a youth
          reports this exciting news to his friends that they are about to get
          their new computer by telling them, “Dude, you’re getting a Dell!” It
          was a cute series but it reflects the excitement young people get
          about anything new, particularly if it’s a new machine.`,
    `So when its time to finally get your children that very first
          telescope, you want to make sure it’s just the right thing. There are
          a number of reasons you should put some serious thought into just what
          this beginner telescope should look like. Perhaps this will be your
          children’s first experience with a real telescope. They may have a
          healthy and thriving love of astronomy from your family trips to the
          country to watch a meteor shower or just to gaze at the stars. And you
          may have piqued their interest showing them how to enhance the
          experience with binoculars or even letting them play with your
          telescope.`,
  ];
  return (
    <main>
      <Header setModifyingNote={setModifyingNote} />
      <Note
        title=""
        paragraphs={dummyParas}
        modifyingNote={modifyingNote}
        setModifyingNote={setModifyingNote}
      />
    </main>
  );
};

export default Main;
