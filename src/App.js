import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header title='User Activity Tracker'/>
      <Users />

    </div>
  );
}

export default App;
