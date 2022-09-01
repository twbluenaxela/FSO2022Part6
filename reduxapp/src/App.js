import React, { ReactDOM } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNote, toggleImportanceOf } from './reducers/noteReducer';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';

function App() {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}

export default App;
