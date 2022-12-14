import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api'
import Notes from '../../components/Notes/index'

const NotesPage = ({ user }) => {
  const [quickNotes, setQuickNotes] = useState([])
  const [formData, setFormData] = useState("")


  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  const addNote = async (e) => {
    e.preventDefault()
    try {
      const newNote = await notesAPI.create({text: formData})
      setQuickNotes([...quickNotes, newNote])
    } catch (err) {
      console.log(err)
    }
    // setQuickNotes([notes ? {...notes, newNote}:  newNote ])
  }

  useEffect(() => {
    const getNotes = async () => {
      // debugger
      const notes = await notesAPI.getAll()
      console.log(notes)
      setQuickNotes(notes)
    }
    getNotes()
  }, [])
  return (
    <>
      <Notes notes={quickNotes} />
      <form onSubmit={addNote}>
        <label htmlFor="">Add Note</label><br />
        <input type="text" name="text" onChange={handleChange} value={formData}/><br />
        <button type="submit">Add Note</button>
      </form>
    </>
  );
};

export default NotesPage;