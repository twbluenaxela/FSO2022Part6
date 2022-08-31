import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

function Note({ note, handleClick }) {
  return (
    <li
      key={note.id}
      onClick={handleClick}
    >
      {note.content}
      <strong>{note.important ? 'important' : ''}</strong>
    </li>
  );
}

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />

      ))}
    </ul>
  );
}

export default Notes;
