import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [newAirline, setNewAirline] = useState('');

  const addAirline = () => {
    dispatch({
      type: 'AIRLINES_ADD',
      payload: newAirline
    });
    setNewAirline('');
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <input value={newAirline} onChange={event => setNewAirline(event.target.value)} placeholder='Airline Name' />
      <button onClick={addAirline}>Add Airline</button>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
