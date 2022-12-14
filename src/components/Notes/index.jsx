import Note from "../../components/Note/index";

const Notes = ({ notes }) => {
  const results =  notes.map((note) => <Note note={note} key={note._id} />)
  return (
      <div>{results}</div>
  );
};

export default Notes;
