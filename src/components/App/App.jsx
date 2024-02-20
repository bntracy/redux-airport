// import React, { useState } from 'react';

import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirlineTable/AirlineTable';

function App() {


  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm />
      <table>{/* Airlines should be listed here */}<AirlineTable /></table>
    </div>
  );
}

export default App;
