import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar'
import React, { useState } from 'react';
import Typography from '@mui/material/Typography'

function App() {

  const [calendarValue, setCalendarValue] = useState(new Date());

  console.log('value:', calendarValue);

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">Hello World.</Typography>
        <br />
        <Calendar onChange={setCalendarValue} value={calendarValue} />
        <br />
        <Typography variant="h5">{calendarValue.toString()}</Typography>
      </header>
    </div>
  );
}

export default App;
