import React, { useState } from "react";

const Create = props => {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const [newNote, setNewNote] = useState ({
    title: "",
    body: "", 
    email: "",
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    // const key = "title";
    // setTitle(event.target.value);
    setNewNote({ ...newNote, 
      [event.target.name]: event.target.value})
  };

  // const handleChange = event => {
  //   // setBody(event.target.value);
  //   setNewNote({ ...newNote, body: event.target.value })
  // }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newNote);
    props.setNotes([newNote, ...props.notes]);
    resetForm();
  }

  const resetForm = () => {
    setNewNote(initialNote);
  };

  return (
  <form onSubmit={handleSubmit}>
        {/* <label for="textField">Valuable Notes: </label> */}
    <input 
    type="text" 
    name="title" 
    placeholder="Title"
    onChange={handleChange}
    value={newNote.title}
     />
    <textarea name="body"
    onChange={handleChange}
    placeholder="Notes"
    value={newNote.body}
     />
    
    <button type="submit">Submit </button>
    <button type="button" onClick={resetForm} >
    Reset
    </button>
  </form>
    );
};

export default Create;

// ...spread operator, merges and spreads itself across the two (or more) objects.

// type="date" goes under input for calendar/dates
