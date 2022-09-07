import { useDispatch, useSelector, connect } from 'react-redux';
import { createNote } from '../reducers/noteReducer';

function NewNote(props) {
  // const dispatch = useDispatch();
  // console.log(createNote);
  // console.log(props.createNote);

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    // dispatch(createNote(content));
    props.createNote(content);

    // store.dispatch(createNote(content));
    // I was wondering why it wasn't updating the display.
    console.log(store.getState());
  };
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createNote: (value) => {
    dispatch(createNote(value));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewNote);
