import React from 'react';
import Allroutes from './Components/Allroutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Allroutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
