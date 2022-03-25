import React from "react";


function Note(props) {
  return (
    <div className="note">
      <h1>{props.note_title}</h1>
      <p>{props.note_body}</p>
    </div>
  );
}

export default Note;
