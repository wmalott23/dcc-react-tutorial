import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';



function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries ={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>

    </div>
  );
}

export default App;
