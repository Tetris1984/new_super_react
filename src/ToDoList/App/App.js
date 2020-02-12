import React, { Component } from 'react';
import ToDoList  from '../ToDoList'
import { Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from '../../reducers';

// const store = createStore(rootReducer);
// console.log("STOREEE",store)
export default class App extends Component {
  render() {
    return (
        <ToDoList />
        )
  }
}


