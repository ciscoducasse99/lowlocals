import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import Tasks from './components/Tasks';
import TaskButton from './components/TaskButton';

import { Provider } from 'react-redux';
import store from './store';

const App = () =>{

  return (
    //style={{backgroundColor:"rgb(248, 249, 250)"}}
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Tasks/>
        <TaskButton/>
      </div>
    </Provider>
  );
}

export default App;
