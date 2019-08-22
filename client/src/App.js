import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import Tasks from './components/Tasks';
import TaskButton from './components/TaskButton';
import FullSized from './components/FullSized';

import { Provider } from 'react-redux';
import store from './store';

const App = () =>{

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Tasks style={{
          minHeight:"100vh",
          backgroundColor:"#fdfdfd"
        }}/>
        <TaskButton/>
      </div>
    </Provider>
  );
}

export default App;
