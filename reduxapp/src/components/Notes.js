import { useDispatch, useSelector, connect } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

function Note({ note, handleClick }) {
  return (
    <li
      key={note.id}
      onClick={handleClick}
    >
      {note.content}
      <strong>
        {' '}
        {note.important ? 'important' : ''}
      </strong>
    </li>
  );
}

function Notes(props) {
  // const dispatch = useDispatch();

  // const notes = useSelector(({ filter, notes }) => {
  //   if (filter === 'ALL') {
  //     return notes;
  //   }
  //   return filter === 'IMPORTANT'
  //     ? notes.filter((note) => note.important)
  //     : notes.filter((note) => !note.important);
  // });

  // const notesToShow = () => {
  // };

  return (
    <ul>
      {props.notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => props.toggleImportanceOf(note.id)}
        />

      ))}
    </ul>
  );
}

// const mapStateToProps = (state) => {
//   if (state.filter === 'ALL') {
//     return state.notes;
//   }
//   return state.filter === 'IMPORTANT'
//     ? state.notes.filter((note) => note.important)
//     : state.notes.filter((note) => !note.important);
// };
const mapStateToProps = (state) => ({
  notes: state.notes,
  filter: state.filter,
});

const mapDispatchToProps = {
  toggleImportanceOf,
};

// const ConnectedNotes

// export default Notes;
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
