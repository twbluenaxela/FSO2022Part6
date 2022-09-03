/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';

import noteService from './services/notes';

import noteReducer, { setNotes } from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer,
// });

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

noteService.getAll().then((notes) => store.dispatch(setNotes(notes)));

store.subscribe(() => console.log(store.getState()));
// store.dispatch(filterChange('IMPORTANT'));
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
  // <div />,
);
