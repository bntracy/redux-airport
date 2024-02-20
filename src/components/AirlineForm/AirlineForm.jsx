import { useDispatch } from 'react-redux';
import { useState } from 'react';

function AirlineForm() {
    const dispatch = useDispatch();
    const [newAirline, setNewAirline] = useState('');
  
    const addAirline = () => {
      dispatch({
        type: 'AIRLINES_ADD',
        payload: newAirline
      });
      setNewAirline('');
    }

    return (<>
      <input value={newAirline} onChange={event => setNewAirline(event.target.value)} placeholder='Airline Name' />
      <button onClick={addAirline}>Add Airline</button>
    </>);
}

export default AirlineForm;