import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';
import noteService from '../services/notes';

function NewNote(props) {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    // const newNote = await noteService.createNew(content);
    dispatch(createNote(content));

    // store.dispatch(createNote(content));
    // I was wondering why it wasn't updating the display.
    // console.log(store.getState());
  };
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
}

export default NewNote;
