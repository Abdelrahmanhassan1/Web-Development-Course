import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((note) => (
        <Note key={note.key} note_title={note.title} note_body={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
