import React, { ReactDOM, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import noteService from './services/notes';
import { initializeNotes, setNotes } from './reducers/noteReducer';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}

export default App;
